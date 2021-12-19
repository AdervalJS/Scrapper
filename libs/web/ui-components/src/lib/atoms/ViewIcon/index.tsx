import { IoIosEye } from 'react-icons/io';
import { IconBaseProps } from 'react-icons';

export type ViewIconProps = IconBaseProps;

export const ViewIcon: React.FC<ViewIconProps> = ({
  color = '#646464',
  size = 18,
  ...rest
}) => {
  return <IoIosEye id="viewIcon" color={color} size={size} {...rest} />;
};
