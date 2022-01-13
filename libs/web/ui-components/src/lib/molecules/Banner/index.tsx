import { useTheme } from 'styled-components';
import { Manga, Theme } from '@scrapper/shared/util-interfaces';

import { Container, ContainerProps } from './banner.styles';
import { BaseProfile } from '../BaseProfile';

export interface BannerProps extends Omit<ContainerProps, 'data'> {
  data: Manga;
}

export const Banner: React.FC<BannerProps> = ({ data, ...rest }) => {
  const theme = useTheme() as Theme;
  const { name, image } = data;

  return (
    <Container
      id="banner"
      data={{
        imageUrl: image,
        alt: name,
      }}
      theme={theme}
      {...rest}
    >
      <BaseProfile data={data} viewType="banner" />
    </Container>
  );
};
