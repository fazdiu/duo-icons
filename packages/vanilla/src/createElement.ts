import { SVG_ATTRIBUTES } from "../../shared/attributes";

interface Attributes {
  [key: string]: string | number;
}

/**
 * Creates a new HTMLElement from icon node
 * @param attributesFrom - Attributes to merge with defaults
 * @param bodySVG - SVG body content
 * @returns SVGElement
 */
const createElement = (attributesFrom: Attributes, bodySVG: string = ''): SVGElement => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement;
  element.innerHTML = bodySVG;

  const combineAttributes: Attributes = { ...SVG_ATTRIBUTES, ...{ className: "" }, ...attributesFrom };

  Object.entries(combineAttributes).forEach(([name, value]) => {

    value && element.setAttribute(name, String(value));
  });

  return element;
};

export default createElement;