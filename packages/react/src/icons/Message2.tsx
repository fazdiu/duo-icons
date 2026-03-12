import { IconBase, IconProps } from '../IconBase';

export const Message2 = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H4a2 2 0 0 1-2-2v-8C2 6.477 6.477 2 12 2"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M15 10H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 0 0 .117-1.993zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
