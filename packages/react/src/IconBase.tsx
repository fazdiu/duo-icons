import * as React from 'react';
import { SVG_ATTRIBUTES } from "../../shared/attributes";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconBase = ({
  size = SVG_ATTRIBUTES.size,
  className = '',
  children,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={SVG_ATTRIBUTES.viewBox}
    xmlns={SVG_ATTRIBUTES.xmlns}
    className={(SVG_ATTRIBUTES.className + ' ' + className || '').trim()}
    {...props}
  >
    {children}
  </svg>
);
