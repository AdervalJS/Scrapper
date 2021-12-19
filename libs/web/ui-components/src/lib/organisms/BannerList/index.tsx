import { useTheme } from 'styled-components';
import { Manga, Theme } from '@scrapper/shared/util-interfaces';

import { Banner } from '../../molecules/Banner';
import { List, ListProps } from '../List';

import { Container } from './bannerList.styles';

export interface BannerListProps extends Omit<ListProps, 'title'> {
  data: Manga[];
}

export const BannerList: React.FC<BannerListProps> = ({ data, ...rest }) => {
  const theme = useTheme() as Theme;
  return (
    <Container>
      <List theme={theme} {...rest} id="bannerList">
        {data.map((item) => (
          <Banner theme={theme} key={item.id} data={item} />
        ))}
      </List>
    </Container>
  );
};
