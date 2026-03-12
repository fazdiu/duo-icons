import { IconBase, IconProps } from '../IconBase';

export const CreditCard = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3zM18 14h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
