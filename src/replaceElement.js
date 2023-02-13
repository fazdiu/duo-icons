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
 * @param {string|array} attrs 
 * @param {array} merge 
 * @returns {string}
 */
const combineClassNames = (attrs, merge = []) => {

    let classArray = [];
    if (typeof attrs === 'string') {
        classArray = attrs.split(' ');
    }

    if (Array.isArray(attrs)) {
        classArray.push(...attrs)
    }

    classArray.push(...merge);

    let newClass = classArray.flat(x => x).filter((item, index, array) => {
        return array.indexOf(item) == index;
    }).join(' ');

    return newClass
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
        attributesFrom = getAttrs(element);

    let allClassNames = [];
    if (attributesConfig.class) {
        if (Array.isArray(attributesConfig.class)) {
            allClassNames.push(...attributesConfig.class);
        }
        if (typeof attributesConfig.class === 'string') {
            allClassNames.push(...attributesConfig.class.split(' '));
        }
    }

    if (attributesFrom.class && typeof attributesFrom.class === 'string') {
        allClassNames.push(...attributesFrom.class.split(' '));
    }

    attributesFrom.class = combineClassNames(allClassNames, ['duo-icon', `duo-icon-${iconName}`]);

    const svgElement = createElement(attributesFrom, iconBody);

    return element.parentNode?.replaceChild(svgElement, element);

}

export { combineClassNames, getAttrs }
export default replaceElement