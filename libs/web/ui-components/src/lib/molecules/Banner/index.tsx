import { useTheme } from 'styled-components';
import { Manga, Theme } from '@scrapper/shared/util-interfaces';
import { ItemName } from '../../atoms/ItemName';
import { ItemImage } from '../../atoms/ItemImage';
import { ItemSynopsis } from '../../atoms/ItemSynopsis';
import { TitleMedium } from '../../atoms/TitleMedium';
import { Truncate } from '../../atoms/Truncate';
import { Read } from '../Read';

import {
  Container,
  ContainerProps,
  Content,
  Genres,
  Line,
  Genre,
} from './banner.styles';

export interface BannerProps extends ContainerProps {
  data: Manga;
}

export const Banner: React.FC<BannerProps> = ({ data, ...rest }) => {
  const theme = useTheme() as Theme;

  return (
    <Container {...rest} theme={theme} id="banner">
      <ItemImage src={data.image} alt={data.name} />

      <Content>
        <ItemName>{data.name}</ItemName>

        <Line theme={theme} />
        <TitleMedium>{data.author}</TitleMedium>

        <Genres>
          {data.genres.map((genre) => (
            <Genre key={genre} theme={theme}>
              {genre}
            </Genre>
          ))}
        </Genres>

        <Truncate line={2}>
          <ItemSynopsis>{data.synopsis}</ItemSynopsis>
        </Truncate>
        <Read data={{ itemId: data.id }} />
      </Content>
    </Container>
  );
};
