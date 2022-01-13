import { useTheme } from 'styled-components';
import { Manga, Theme } from '@scrapper/shared/util-interfaces';

import { ItemImage } from '../../atoms/ItemImage';
import { ItemName } from '../../atoms/ItemName';
import { ItemSynopsis } from '../../atoms/ItemSynopsis';
import { TitleMedium } from '../../atoms/TitleMedium';
import { Read } from '../Read';

import {
  ContainerProps,
  Genre,
  Genres,
  Line,
  Container,
  Info,
  Footer,
  Status,
  Options,
} from './baseProfile.styles';
import { Truncate } from '../../atoms/Truncate';
import { View } from '../View';

export interface BaseProfileProps extends ContainerProps {
  data: Manga;
  synopsisLine?: number;
}

export const BaseProfile: React.FC<BaseProfileProps> = ({
  data,
  synopsisLine,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  const { image, name, author, genres, id, synopsis, view } = data;

  return (
    <Container {...rest} className="baseProfile">
      <ItemImage alt={name} src={image} />

      <Info>
        <ItemName>{name}</ItemName>

        <Line theme={theme} />

        <TitleMedium>{author}</TitleMedium>
      </Info>

      <Genres>
        {genres.map((genre) => (
          <Genre key={genre} theme={theme}>
            {genre}
          </Genre>
        ))}
      </Genres>

      {synopsisLine && (
        <Truncate line={2}>
          <ItemSynopsis>{synopsis}</ItemSynopsis>
        </Truncate>
      )}

      {!synopsisLine && <ItemSynopsis>{synopsis}</ItemSynopsis>}

      <Footer>
        <Status>
          <View view={view} />
        </Status>

        <Options>
          <Read data={{ itemId: id }} />
        </Options>
      </Footer>
    </Container>
  );
};
