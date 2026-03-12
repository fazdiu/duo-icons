import { IconBase, IconProps } from '../IconBase';

export const Bell = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M9.042 19.003h5.916c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      d="M12 2.003a7.5 7.5 0 0 1 7.5 7.5v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
);
