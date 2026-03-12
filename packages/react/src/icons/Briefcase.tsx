import { IconBase, IconProps } from '../IconBase';

export const Briefcase = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M14 3a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M14 5h-4a1 1 0 0 0-.993.883L9 6h6a1 1 0 0 0-.883-.993zM19 10H5a1 1 0 0 0-.117 1.993L5 12h6v1a1 1 0 0 0 1.993.117L13 13v-1h6a1 1 0 0 0 .117-1.993z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
