import createElement from './createElement';

interface Attributes {
  [key: string]: string;
}

interface Compatibility {
  createClassNames: (iconName: string) => string;
  getAttribute: (element: HTMLElement) => string | null,
}

/**
 * Get the attributes of an HTML element.
 * @param element - HTMLElement
 * @returns Object of attributes
 */
const getAttrs = (element: HTMLElement): Attributes => {
  const attributes: Attributes = {};

  Array.from(element.attributes).forEach(({ name, value }) => {
    attributes[name] = value;
  });
  return attributes;
};

/**
 * Combines the classNames of array of classNames to a String
 * @param attrs - Class names as string or array
 * @param merge - Additional class names to merge
 * @returns Combined class names string
 */
const combineClassNames = (attrs: string | string[], merge: string[] = []): string => {
  let classArray: string[] = [];
  if (typeof attrs === 'string') {
    classArray = attrs.split(' ');
  }

  if (Array.isArray(attrs)) {
    classArray.push(...attrs);
  }

  classArray.push(...merge);

  const newClass = classArray
    .flat()
    .filter((item, index, array) => array.indexOf(item) === index)
    .filter(Boolean).join(' ');

  return newClass;
};

/**
 * ReplaceElement, replaces the given element with the created icon.
 * @param element - HTMLElement to replace
 * @param icons - Object of icons
 * @param attributesConfig - Additional attributes config
 * @returns Replaced element or undefined
 */
const replaceElement = (
  element: HTMLElement,
  icons: Record<string, string> = {},
  attributesConfig: Record<string, any> = {}
): HTMLElement | undefined => {

  const compatibility = backwardCompatibility(element);

  const iconName = compatibility.getAttribute(element);

  if (!iconName) return;

  const _iconName = iconName.replace('-', '_');

  if (!icons || !icons.hasOwnProperty(_iconName) || !icons[_iconName]) {
    console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
    return;
  }

  const iconBody = icons[_iconName];
  let attributesFrom = getAttrs(element);

  attributesFrom = { ...attributesConfig, ...attributesFrom };

  let allClassNames: string[] = [];
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

  attributesFrom.class = combineClassNames(allClassNames, [
    compatibility.createClassNames(iconName),
  ]);

  const svgElement = createElement(attributesFrom, iconBody);

  return element.parentNode?.replaceChild(svgElement, element) as HTMLElement;
};

// 2v backward compatibility; it will be removed in future versions
const backwardCompatibility = (element: HTMLElement): Compatibility => {
  
    const bool = !element.hasAttribute('data-duo-icons');

    if (element.hasAttribute('data-duoicon')) {
      console.warn(`The "data-duoicon" attribute the generated CSS classes "duo-icon-{icon_name}" and "duo-icon" are deprecated and will be removed in future versions. Use "data-duo-icons" instead. Found in: ${element.outerHTML}`
      );
    }
  
  return {
  // !Important: Do not add "duo-icons-{icon-name}" as it may cause problems if used with @duo-icons/tailwind.
  createClassNames: (iconName: string): string => bool ? `duo-icon-${iconName} duo-icon` : "duo-icons",

  getAttribute: (element: HTMLElement): string | null => element.getAttribute('data-duo-icons') || element.getAttribute('data-duoicon')

}};


export { combineClassNames, getAttrs };
export default replaceElement;