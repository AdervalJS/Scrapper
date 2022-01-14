import styled from 'styled-components';
import { MARGIN_TOP, MARGIN_HORIZONTAL } from '../constants/layout';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

export const HeaderWrapper = styled.aside`
  grid-row: 1;
`;

export const Content = styled.div`
  grid-row: 2;
  min-height: 79vh;

  @media only screen and (min-width: 835px) {
    & {
      margin: ${MARGIN_HORIZONTAL};
    }
  }
`;

export const FooterWrapper = styled.div`
  margin-top: ${MARGIN_TOP};
  grid-row: 3;
`;
