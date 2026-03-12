import { IconBase, IconProps } from '../IconBase';

export const IdCard = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M10 9v2H8V9zM17 11h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993z"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      d="M10 7H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zM17 15H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
