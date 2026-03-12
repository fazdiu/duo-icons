import { IconBase, IconProps } from '../IconBase';

export const Android = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M20 14v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5zM15 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      className="duo-icons-primary-layer"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 3c1.33 0 2.584.324 3.687.899l.606-.606a1 1 0 1 1 1.414 1.414l-.35.35A7.98 7.98 0 0 1 20 11v1H4v-1a7.98 7.98 0 0 1 2.644-5.942l-.351-.35a1 1 0 1 1 1.414-1.415l.606.606A8 8 0 0 1 12 3"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
);
