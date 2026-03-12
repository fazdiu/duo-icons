import { IconBase, IconProps } from '../IconBase';

export const Toggle = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M6 12c0-1.54 1.667-2.502 3-1.732.619.357 1 1.017 1 1.732 0 1.54-1.667 2.502-3 1.732A2 2 0 0 1 6 12"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8 5C2.611 5-.756 10.833 1.938 15.5A7 7 0 0 0 8 19h8c5.389 0 8.756-5.833 6.062-10.5A7 7 0 0 0 16 5zm0 3c-3.079 0-5.004 3.333-3.464 6A4 4 0 0 0 8 16c3.079 0 5.004-3.333 3.464-6A4 4 0 0 0 8 8"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
);
