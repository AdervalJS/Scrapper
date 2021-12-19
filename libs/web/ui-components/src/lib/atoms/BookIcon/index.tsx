import { IconBaseProps } from 'react-icons';
import { IoIosBook } from 'react-icons/io';

export type BookIconProps = IconBaseProps;

export const BookIcon: React.FC<BookIconProps> = ({
  color = '#000',
  size = 18,
  ...rest
}) => {
  return <IoIosBook id="bookIcon" color={color} size={size} {...rest} />;
};
