import { IconBase, IconProps } from '../IconBase';

export const Target = (props: IconProps) => (
  <IconBase {...props}>
    <path
      fill="currentColor"
      d="M12 2a1 1 0 0 1 .993.883L13 3v.055a9.005 9.005 0 0 1 7.911 7.674l.034.271H21a1 1 0 0 1 .117 1.993L21 13h-.055a9.005 9.005 0 0 1-7.674 7.911l-.271.034V21a1 1 0 0 1-1.993.117L11 21v-.055a9.005 9.005 0 0 1-7.911-7.674L3.055 13H3a1 1 0 0 1-.117-1.993L3 11h.055a9.005 9.005 0 0 1 7.674-7.911L11 3.055V3a1 1 0 0 1 1-1"
      className="duo-icons-secondary-layer"
      opacity=".3"
    />
    <path
      fill="currentColor"
      d="M12 7c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7"
      className="duo-icons-primary-layer"
    />
  </IconBase>
);
