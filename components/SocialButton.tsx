import { ReactElement, ReactNode } from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
}

export default function SocialButton(props: Props): ReactElement {
  const { icon, ...other } = props;
  return (
    <a
      className="inline-flex w-10 p-2 text-gray-800 rounded-md cursor-pointer hover:shadow-md hover:bg-gray-700 hover:text-white"
      {...other}>
      {icon}
    </a>
  );
}

SocialButton.defaultProps = {
  icon: undefined
};
