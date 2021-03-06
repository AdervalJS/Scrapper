import { useRecoilState, RecoilState } from 'recoil';
import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { ItemSimpleButton } from '../../molecules/ItemSimpleButton';
import { ItemCompactedButton } from '../../molecules/ItemCompactedButton';
import { CompactItemList, CompactItemListData } from '../CompactItemList';
import { SimpleItemList, SimpleItemLisData } from '../SimpleItemList';

import { Container, Header, HeaderOptions } from './toggleList.styles';

export type ToggleListData = CompactItemListData;

export type ToggleListType = 'compactedList' | 'simpleList'

export interface ToggleListProps {
  data: ToggleListData;
  state: RecoilState<ToggleListType>;
  header?: React.ReactNode;
  onItemClick?: (item: CompactItemListData[0] | SimpleItemLisData[0]) => void;
}

export const ToggleList: React.FC<ToggleListProps> = ({
  data,
  header,
  onItemClick,
  state,
  ...rest
}) => {
  const [typeListView, setTypeListView] = useRecoilState<ToggleListType>(state);
  const theme = useTheme() as Theme;

  return (
    <Container {...rest} id="toggleList">
      <Header>
        {header}

        <HeaderOptions>
          <ItemCompactedButton
            theme={theme}
            keepPressed={typeListView === 'compactedList'}
            onClick={() => setTypeListView('compactedList')}
          />
          <ItemSimpleButton
            theme={theme}
            keepPressed={typeListView === 'simpleList'}
            onClick={() => setTypeListView('simpleList')}
          />
        </HeaderOptions>
      </Header>

      {typeListView === 'compactedList' && (
        <CompactItemList
          disableControllers
          onPick={onItemClick}
          theme={theme}
          data={data}
        />
      )}

      {typeListView === 'simpleList' && (
        <SimpleItemList
          disableControllers
          onPick={onItemClick}
          theme={theme}
          data={data}
        />
      )}
    </Container>
  );
};
