import { optimize } from 'svgo';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const dirIcons = path.join(process.cwd(), '../icons');
const dirOutputJSON = path.join(process.cwd(), './src/json/icons.json');

function optimizeSVG(filePath: string): string {
    const svgString = fs.readFileSync(filePath, 'utf8');
    const result = optimize(svgString, {
        multipass: true,
    });
    // `optimize` returns type { data: string } although its typing is a bit loose
    return (result as { data: string }).data;
}

function getBody(svgContent: string): string {
    const dom = new JSDOM(svgContent);
    const svg = dom.window.document.documentElement.querySelector('svg');
    if (!svg) {
        throw new Error('No <svg> element found when extracting body');
    }
    return svg.innerHTML;
}

function svgOptimized(): Record<string, string> {
    const svgOptimized: Record<string, string> = {};
    const files = fs.readdirSync(dirIcons);
    files.forEach((fileName) => {
        const pathSVG = `${dirIcons}/${fileName}`;
        const cleanFileName = fileName.replace('.svg', '').replace('-', '_');
        svgOptimized[cleanFileName] = getBody(optimizeSVG(pathSVG));
    });
    return svgOptimized;
}

// create file icons.json all icons
function createFileJSON(): Record<string, string> {
    const data = svgOptimized();
    fs.writeFileSync(dirOutputJSON, JSON.stringify(data, null, 4), 'utf8');

    console.log('The file was created: '+dirOutputJSON);
    return data;
}

// execute script
if (import.meta.url === `file://${process.argv[1]}`) {
    createFileJSON();
}
