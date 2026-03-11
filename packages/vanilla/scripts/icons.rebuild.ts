// parse the svg files in the "icons" folder and if necessary add classNames and opacity attribute
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// add classNames
export function addClassNames(filePath: string): string {
    const dom = new JSDOM(fs.readFileSync(filePath, 'utf8'));
    const svg = dom.window.document.documentElement.querySelector('svg');

    if (!svg) {
        throw new Error(`No <svg> element found in ${filePath}`);
    }

    // if (!svg.classList.contains('duoicon')) {
    //     svg.classList.add('duoicon');
    // }

    svg.querySelectorAll('svg *').forEach((rawItem: Element) => {
        const item = rawItem as Element & { style: CSSStyleDeclaration };
        item.removeAttribute('class');
        // remove style
        if (item.hasAttribute('style') && ['.3', '0.3'].includes(item.style['opacity'])) {
            item.style.removeProperty('opacity');
            item.setAttribute('opacity', '.3');
        }

        if ((item.hasAttribute('opacity') && ['.3', '0.3'].includes(item.getAttribute('opacity') || ''))) {
            item.classList.add('duo-icons-secondary-layer');
        } else {
            item.classList.add('duo-icons-primary-layer');
        }

        if (item.hasAttribute('style') && !item.getAttribute('style')) {
            item.removeAttribute('style');
        }

        if (item.classList.contains('secondary-layer')) {
            item.classList.replace('secondary-layer', 'duo-icons-secondary-layer');
        }
        if (item.classList.contains('primary-layer')) {
            item.classList.replace('primary-layer', 'duo-icons-primary-layer');
        }
    });

    return svg.outerHTML;
}

// script entry point
function main(): void {
    const dir = path.join(process.cwd(), 'icons');
    const files = fs.readdirSync(dir);

    files.forEach((fileName) => {
        const pathSVG = `${dir}/${fileName}`;
        const content = addClassNames(pathSVG);
        fs.writeFileSync(pathSVG, content, 'utf8');
    });
}

// run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}
