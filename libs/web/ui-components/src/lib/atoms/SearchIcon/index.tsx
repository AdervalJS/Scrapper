import { IoIosSearch } from 'react-icons/io';
import { IconBaseProps } from 'react-icons';

export type SearchIconProps = IconBaseProps;

export const SearchIcon: React.FC<SearchIconProps> = ({
  color = '#000',
  size = 18,
  ...rest
}) => {
  return <IoIosSearch size={size} color={color} id="searchIcon" {...rest} />;
};
