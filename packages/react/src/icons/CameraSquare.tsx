import { IconBase, IconProps } from '../IconBase';

export const CameraSquare = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M19 6h-1a1 1 0 0 0-.117 1.993L18 8h1a1 1 0 0 0 .117-1.993zM12 7c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
