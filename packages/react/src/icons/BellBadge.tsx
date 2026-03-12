import { IconBase, IconProps } from '../IconBase';

export const BellBadge = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M18.5 9q.508-.002.973-.137.027.317.027.64v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25c.201-5.749 6.533-9.14 11.43-6.123-1.834 1.973-.845 5.193 1.781 5.795A3.5 3.5 0 0 0 18.5 9"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M18.5 8c1.925 0 3.127-2.083 2.165-3.75A2.5 2.5 0 0 0 18.5 3c-1.925 0-3.127 2.083-2.165 3.75A2.5 2.5 0 0 0 18.5 8M14.958 19.003c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
