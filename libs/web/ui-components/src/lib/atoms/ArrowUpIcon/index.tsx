import { IoMdArrowUp } from 'react-icons/io';
import { IconBaseProps } from 'react-icons';

export type ArrowUpIconProps = IconBaseProps;

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({
  color = '#000',
  size = 18,
  ...rest
}) => {
  return <IoMdArrowUp id="arrowUpIcon" color={color} size={size} {...rest} />;
};
