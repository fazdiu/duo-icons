const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// dir iconos svg
const dirIcons = path.join(process.cwd(), 'icons');

const optimizeSVG = (path) => {
    const svgString = fs.readFileSync(path, 'utf8');
    const result = optimize(svgString, {
        multipass: true,
    });
    return result.data;
}

const getBody = (svgContent) => {
    const dom = new JSDOM(svgContent);
    const svg = dom.window.document.documentElement.querySelector('svg');
    return svg.innerHTML;
}

const svgOptimized = () => {
    let svgOptimized = {};
    let files = fs.readdirSync(dirIcons);
    files.forEach((fileName) => {

        let pathSVG = `${dirIcons}/${fileName}`;
        let cleanFileName = fileName.replace('.svg', '').replace('-', '_');
        svgOptimized[cleanFileName] = getBody(optimizeSVG(pathSVG));
    })
    return svgOptimized;
}

// create file icons.json all icons 
const createFileJSON = () => {
    const data = svgOptimized();
    const fileData = fs.readFileSync('icons.json', 'utf8');
    fs.writeFileSync('icons.json', JSON.stringify(data, null, 4));
    return data;
}

console.log(createFileJSON())