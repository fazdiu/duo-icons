import { IconBase, IconProps } from '../IconBase';

export const Building = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M13 3a2 2 0 0 1 1.995 1.85L15 5v14h1V9.5a.5.5 0 0 1 .41-.492L16.5 9H18a2 2 0 0 1 1.995 1.85L20 11v8h1a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h1V5a2 2 0 0 1 1.85-1.995L6 3z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M11 7H8v2h3zM11 11H8v2h3zM11 15H8v2h3z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
