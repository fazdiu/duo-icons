import replaceElement from './replaceElement';
import allIcons from './json/icons.json';

export interface Config {
  icons?: Record<string, string>;
  attributes?: Record<string, any>;
  root?: HTMLElement | string;
}

/**
 * Replaces all elements with matching nameAttr with the defined icons
 * @param config - Configuration object
 */
const createIcons = (config: Config = {}): void => {
  config = { icons: {}, attributes: {}, root: undefined, ...config };

  if (typeof document === 'undefined') {
    throw new Error('`createIcons()` only works in a browser environment.');
  }

  const root = typeof config.root === 'string' ? document.querySelector(config.root) : config.root || document;

  if (!root) {
    throw new Error('Root element not found.');
  }

  const elementsToReplace = root.querySelectorAll(
    // 2v "[data-duoicon]" backward compatibility; it will be removed in future versions
    "[data-duo-icons],[data-duoicon]"
  );

  Array.from(elementsToReplace).forEach((element) => {
    replaceElement(element as HTMLElement, allIcons, config.attributes || {});
  });
};

export { createIcons, allIcons as icons };