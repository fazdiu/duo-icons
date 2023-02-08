// parse the svg files in the "icons" folder and if necessary add classNames and opacity attribute
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

// add classNames
const addClassNames = (path) => {
    const dom = new JSDOM(fs.readFileSync(path, 'utf8'));
    const svg = dom.window.document.documentElement.querySelector('svg');

    if (!svg.classList.contains('duoicon')) {
        svg.classList.add('duoicon')
    }

    svg.querySelectorAll('svg *').forEach(item => {
        item.removeAttribute('class');
        // remove style 
        if (item.hasAttribute('style') && [".3", "0.3"].includes(item.style['opacity'])) {
            item.style.removeProperty("opacity");
            item.setAttribute('opacity', '.3');
        }

        if ((item.hasAttribute("opacity") && [".3", "0.3"].includes(item.getAttribute("opacity")))) {
            item.classList.add('duoicon-secondary-layer');
        } else {
            item.classList.add('duoicon-primary-layer');
        }

        if (item.hasAttribute('style') && !item.getAttribute('style')) {
            item.removeAttribute('style')
        }

        if (item.classList.contains('secondary-layer')) {
            item.classList.replace('secondary-layer', 'duoicon-secondary-layer')
        }
        if (item.classList.contains('primary-layer')) {
            item.classList.replace('primary-layer', 'duoicon-primary-layer')
        }
    })

    return svg.outerHTML;
}

const dir = path.join(process.cwd(), 'icons');
let files = fs.readdirSync(dir);
files.forEach((fileName) => {
    let pathSVG = `${dir}/${fileName}`;
    let content = addClassNames(pathSVG);
    fs.writeFileSync(pathSVG, content, 'utf8');
})