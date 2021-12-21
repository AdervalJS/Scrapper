import { Routes, useParams, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { light } from '@scrapper/shared/assets';
import { Header, Footer } from '@scrapper/web/ui-components';

import { HeaderLink, footerData, copyright, card } from './routers.utils';
import {
  GlobalStyles,
  Container,
  HeaderWrapper,
  FooterWrapper,
  Content,
} from './routers.styles';

export const RoutersContainer: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const { item } = useParams();

  function onSearch(item: string) {
    navigate(`/search/{item}`);
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />

      <Container>
        <HeaderWrapper>
          <Header
            searchValue={item || ''}
            onSearch={onSearch}
            links={HeaderLink}
          />
        </HeaderWrapper>

        <Content>
          <Routes>{children}</Routes>
        </Content>

        <FooterWrapper>
          <Footer data={footerData} copyright={copyright} card={card} />
        </FooterWrapper>
      </Container>
    </ThemeProvider>
  );
};
