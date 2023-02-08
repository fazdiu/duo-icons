import defaultAttributes from "./defaultAttributes";

/**
 * Creates a new HTMLElement from icon node
 * @param {object} attributesFrom
 * @param {string} bodySVG 
 * @returns {ElementHTML}
 */
const createElement = (attributesFrom, bodySVG = '') => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element.innerHTML = bodySVG;

    let combineAttributes = Object.assign(defaultAttributes, attributesFrom);

    Object.keys(combineAttributes).forEach((name) => {
        element.setAttribute(name, combineAttributes[name]);
    });

    return element
}

export default createElement