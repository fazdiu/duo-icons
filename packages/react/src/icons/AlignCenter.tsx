import { IconBase, IconProps } from '../IconBase';

export const AlignCenter = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M17 17.5a1.5 1.5 0 0 1 .144 2.993L17 20.5H7a1.5 1.5 0 0 1-.144-2.993L7 17.5z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M20 2.5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5z"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      d="M17 7.5a1.5 1.5 0 0 1 .144 2.993L17 10.5H7a1.5 1.5 0 0 1-.144-2.993L7 7.5z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M20 12.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
