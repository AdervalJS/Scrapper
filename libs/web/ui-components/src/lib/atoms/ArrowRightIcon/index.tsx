import { IoMdArrowForward } from 'react-icons/io';
import { IconBaseProps } from 'react-icons';

export type ArrowRightIconProps = IconBaseProps;

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = (props) => {
  return <IoMdArrowForward id="ArrowRightIcon" {...props} />;
};
