import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import {
  ItemCompacted,
  ItemCompactedData,
  ItemCompactedProps,
} from '../../molecules/ItemCompacted';
import { List, ListProps } from '../List';

type Item = Omit<ItemCompactedProps, 'data' | 'theme' | 'onPick'>;

export type CompactItemListData = ItemCompactedData[];
export interface CompactItemListProps extends ListProps {
  data: CompactItemListData;
  itemCompacted?: Item;
  onPick?: (props: ItemCompactedData) => void;
}

export const CompactItemList: React.FC<CompactItemListProps> = ({
  itemCompacted,
  data,
  onPick,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  return (
    <List {...rest} id="compactItemList" theme={theme}>
      {data.map((item) => (
        <ItemCompacted
          {...itemCompacted}
          onPick={onPick}
          key={item.id}
          data={item}
          theme={theme}
        />
      ))}
    </List>
  );
};
