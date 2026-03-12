import { IconBase, IconProps } from '../IconBase';

export const ChartPie = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 4v8h8a8 8 0 0 0-8-8"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
