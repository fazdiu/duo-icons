import replaceElement from './replaceElement';
import allIcons from '../icons.json';

/**
 * Replaces all elements with matching nameAttr with the defined icons
 * @param {object} config
 */
const createIcons = (config = {}) => {
    // icons = {}, attributesConfig = {}

    config = Object.assign({ icons: {}, attributes: {} }, config);

    // if (!Object.values(config.icons).length) {
    //     throw new Error(
    //         "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`",
    //     );
    // }

    if (typeof document === 'undefined') {
        throw new Error('`createIcons()` only works in a browser environment.');
    }

    const elementsToReplace = document.querySelectorAll(`[data-duoicon]`);

    Array.from(elementsToReplace).forEach((element) =>
        replaceElement(element, allIcons, config.attributes),
    );
};

export { createIcons, allIcons as icons }