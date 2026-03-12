import { IconBase, IconProps } from '../IconBase';

export const Marker = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29-.2.133-.377.24-.336.205-.416.242a1.88 1.88 0 0 1-1.854 0l-.416-.242-.52-.32-.192-.125-.41-.273a20.7 20.7 0 0 1-3.093-2.566C4.676 16.588 3 14.074 3 11a9 9 0 0 1 9-9"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="m15.08 7.983-4.245 4.244-1.768-1.768a1 1 0 1 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414z"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
