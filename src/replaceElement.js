import createElement from './createElement';

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
const getAttrs = (element) => {
    let attributes = {};
    Array.from(element.attributes).forEach(({ name, value }) => {
        attributes[name] = value;
    })
    return attributes
}

/**
 * Combines the classNames of array of classNames to a String
 * @param {string|object} attrs 
 * @param {array} merge 
 * @returns {string}
 */
const combineClassNames = (attrs, merge = []) => {

    let classArray = [];
    if (typeof attrs === 'string') {
        classArray = attrs.split(' ');
    }

    if (attrs.class && typeof attrs.class === 'string') {
        classArray = attrs.class.split(' ');
    }

    classArray.push(...merge);

    return classArray.filter((item, index, array) => {
        return array.indexOf(item) == index;
    }).join(' ');
}

/**
 * ReplaceElement, replaces the given element with the created icon.
 * @param {HTMLElement} element
 * @param {Object} icons
 * @returns {NodeElement}
 */
const replaceElement = (element, icons = {}, attributesConfig = {}) => {
    const iconName = element.getAttribute('data-duoicon');

    if (!iconName) return

    const _iconName = iconName.replace('-', '_');

    if (!icons || !icons.hasOwnProperty(_iconName) || !icons[_iconName]) {
        return console.warn(
            `${element.outerHTML} icon name was not found in the provided icons object.`,
        );
    }

    const iconBody = icons[_iconName],
        attributesFrom = getAttrs(element),
        classNames = combineClassNames(attributesFrom, ['duo-icon', `duo-icon-${iconName}`]);

    attributesFrom.class = combineClassNames(classNames, attributesConfig.hasOwnProperty('class') ? attributesConfig.class : []);

    const combineAttributes = Object.assign(attributesConfig, attributesFrom);

    const svgElement = createElement(combineAttributes, iconBody);

    return element.parentNode?.replaceChild(svgElement, element);

}

export { combineClassNames, getAttrs }
export default replaceElement