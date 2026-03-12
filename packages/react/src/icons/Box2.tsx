import { IconBase, IconProps } from '../IconBase';

export const Box2 = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="m20.765 7.982.022.19.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095-6.295 3.634-.124.067-.126.06v-8.99z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="m13.25 2.567 6.294 3.634q.076.044.148.092L12 10.838 4.308 6.293a3 3 0 0 1 .148-.092l6.294-3.634a2.5 2.5 0 0 1 2.5 0"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      d="M3.235 7.982 11 12.571v8.988a2 2 0 0 1-.25-.126l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366q0-.195.03-.384z"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
);
