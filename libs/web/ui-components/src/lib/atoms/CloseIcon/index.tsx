import { IoCloseSharp } from 'react-icons/io5';
import { IconBaseProps } from 'react-icons';

export type CloseIconProps = IconBaseProps;

export const CloseIcon: React.FC<CloseIconProps> = (props) => {
  return <IoCloseSharp {...props} className="closeIcon" />;
};
