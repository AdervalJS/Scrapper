import { IoMdFunnel } from 'react-icons/io';
import { IconBaseProps } from 'react-icons';

export type FilterIconProps = IconBaseProps;

export const FilterIcon: React.FC<FilterIconProps> = (props) => {
  return <IoMdFunnel id="filterIcon" {...props} />;
};
