import React from 'react';
import { Path } from 'react-native-svg';
import { IconBase, IconProps } from '../IconBase';

export const ChartPie = (props: IconProps) => (
  <IconBase {...props}>
    <Path
      fill="currentColor"
      d="M 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 Z"
      fillRule="evenodd"
      opacity=".3"
    />
    <Path
      fill="currentColor"
      d="M 12 4 L 12 12 L 20 12 C 20 7.582 16.418 4 12 4 Z"
      fillRule="evenodd"
    />
  </IconBase>
);
