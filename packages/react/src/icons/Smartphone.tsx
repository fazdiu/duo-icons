import { IconBase, IconProps } from '../IconBase';

export const Smartphone = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M17 2a2 2 0 0 1 1.995 1.85L19 4v16a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V4a2 2 0 0 1 1.85-1.995L7 2z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M12.5 16h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
