import { MangaBaseProps, Theme } from '@scrapper/shared/util-interfaces';
import { MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { ItemImage } from '../../atoms/ItemImage';
import { ItemName } from '../../atoms/ItemName';
import { Truncate } from '../../atoms/Truncate';

import { Container, ContainerProps } from './itemSimple.styles';

export type ItemSimpleData = MangaBaseProps;
export interface ItemSimpleProps extends ContainerProps {
  data: ItemSimpleData;
  stopPropagation?: boolean;
  onPick?: (item: ItemSimpleData) => void;
}

export const ItemSimple: React.FC<ItemSimpleProps> = ({
  data,
  onPick = () => {}, // eslint-disable-line
  onClick = () => {}, // eslint-disable-line
  stopPropagation,
  ...rest
}) => {
  const { image, name } = data;
  const theme = useTheme() as Theme;

  function handleClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    if (stopPropagation) e.stopPropagation();

    onPick(data);
    onClick(e);
  }

  return (
    <Container theme={theme} id="itemSimple" onClick={handleClick} {...rest}>
      <ItemImage src={image} alt={name} />
      <Truncate line={1}>
        <ItemName>{name}</ItemName>
      </Truncate>
    </Container>
  );
};
