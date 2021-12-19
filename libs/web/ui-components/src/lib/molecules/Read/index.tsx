import { useState, useEffect, MouseEvent } from 'react';
import { useTheme } from 'styled-components';
import { MangaReadProp, getRecentlyReads } from '@scrapper/web/util-storage';
import { Theme } from '@scrapper/shared/util-interfaces';
import { BookIcon } from '../../atoms/BookIcon';
import { Text } from '../../atoms/Text';

import { Container, ContainerProps } from './read.styles';

type ClickEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

export type ReadData = {
  itemId: number;
};
export interface ReadProps extends ContainerProps {
  data: ReadData;
  stopPropagation?: boolean;
  onPick?: (item: ReadData) => void;
}

export const Read: React.FC<ReadProps> = ({
  data,
  stopPropagation,
  onClick = () => {}, // eslint-disable-line
  onPick = () => {}, // eslint-disable-line
  ...rest
}) => {
  const [recentlyRead, setRecentlyRead] = useState<MangaReadProp | undefined>(
    undefined
  );
  const theme = useTheme() as Theme;

  useEffect(getRecentlyRead, [data.itemId]);

  function getRecentlyRead() {
    const recentlyReads = getRecentlyReads();

    const recentlyRead = recentlyReads.filter(
      ({ id }) => id === data.itemId
    )[0];
    setRecentlyRead(recentlyRead);
  }

  function handleClick(e: ClickEvent) {
    if (stopPropagation) e.stopPropagation();

    onPick(data);
    onClick(e);
  }

  return (
    <Container id="read" onClick={handleClick} theme={theme} {...rest}>
      <BookIcon color="#fff" />
      <Text>{recentlyRead?.chapterId ? 'Continue' : 'Ler agora'}</Text>
    </Container>
  );
};
