import { MouseEvent } from 'react';
import { useTheme } from 'styled-components';
import { Manga, Theme } from '@scrapper/shared/util-interfaces';

import { ItemImage } from '../../atoms/ItemImage';
import { ItemName } from '../../atoms/ItemName';
import { ItemSynopsis } from '../../atoms/ItemSynopsis';
import { View } from '../View';
import { Read } from '../Read';
import { Truncate } from '../../atoms/Truncate';

import {
  Container,
  ContainerProps,
  Info,
  InfoContent,
  InfoFooter,
} from './itemCompacted.styles';

export type ItemCompactedData = Omit<Manga, 'author' | 'genres'>;

export interface ItemCompactedProps extends ContainerProps {
  data: ItemCompactedData;
  stopPropagation?: boolean;
  onPick?: (item: ItemCompactedData) => void;
}

export const ItemCompacted: React.FC<ItemCompactedProps> = ({
  data,
  onClick = () => {}, // eslint-disable-line
  onPick = () => {}, // eslint-disable-line
  stopPropagation,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  const { image, name, synopsis, view, id } = data;

  function handleClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    if (stopPropagation) e.stopPropagation();

    onPick(data);
    onClick(e);
  }

  return (
    <Container id="itemCompacted" theme={theme} onClick={handleClick} {...rest}>
      <ItemImage src={image} alt={name} />

      <Info>
        <InfoContent>
          <Truncate line={1}>
            <ItemName>{name}</ItemName>
          </Truncate>
          <Truncate line={2}>
            <ItemSynopsis>{synopsis}</ItemSynopsis>
          </Truncate>
        </InfoContent>

        <InfoFooter>
          <View view={view} />
          <Read
            stopPropagation
            data={{
              itemId: id,
            }}
          />
        </InfoFooter>
      </Info>
    </Container>
  );
};
