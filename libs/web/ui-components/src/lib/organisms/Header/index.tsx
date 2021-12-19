import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { LogoIcon } from '../../atoms/LogoIcon';
import { Search, SearchProps } from '../../molecules/Search';
import { LinkGroup, Link } from '../../molecules/LinkGroup';
import { Container, ContainerProps, Content, Wrapper } from './header.styles';

export type HeaderLinks = Link[];

export interface HeaderProps
  extends ContainerProps,
    Pick<SearchProps, 'onSearch' | 'searchValue'> {
  links: HeaderLinks;
}

export const Header: React.FC<HeaderProps> = ({
  links,
  searchValue,
  onSearch,
}) => {
  const theme = useTheme() as Theme;

  return (
    <Container theme={theme} id="header">
      <Content>
        <Wrapper>
          <LogoIcon />
          <LinkGroup data={{ links }} />
        </Wrapper>
        <Search searchValue={searchValue} onSearch={onSearch} />
      </Content>
    </Container>
  );
};
