import { IconBase, IconProps } from '../IconBase';

export const AlignBottom = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M15 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
