import { List, ListProps } from '../List';
import {
  ItemSimple,
  ItemSimpleData,
  ItemSimpleProps,
} from '../../molecules/ItemSimple';

type ItemSimple = Omit<ItemSimpleProps, 'data' | 'theme' | 'onPick'>;
export type SimpleItemLisData = ItemSimpleData[];
export interface SimpleItemListProps extends ListProps {
  title?: string;
  data: SimpleItemLisData;
  itemSimple?: ItemSimple;
  onPick?: (props: ItemSimpleData) => void;
}

export const SimpleItemList: React.FC<SimpleItemListProps> = ({
  data,
  itemSimple,
  onPick,
  ...rest
}) => {
  return (
    <List id="simpleItemList" {...rest}>
      {data.map((item) => (
        <ItemSimple onPick={onPick} {...itemSimple} key={item.id} data={item} />
      ))}
    </List>
  );
};
