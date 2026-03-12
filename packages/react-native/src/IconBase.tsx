import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { SVG_ATTRIBUTES } from "./shared/attributes";

export interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const IconBase = ({
  size = SVG_ATTRIBUTES.size,
  color = 'black',
  children,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} viewBox={SVG_ATTRIBUTES.viewBox} {...props}>
    {children}
  </Svg>
);
