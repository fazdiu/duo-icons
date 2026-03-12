import type { SVGAttributes } from 'vue';

// We extend SVG attributes with our custom props
export interface IconProps extends /* @vue-ignore */ SVGAttributes {
  size?: number | string;
}
