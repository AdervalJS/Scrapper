import styled, { css } from 'styled-components';
import { MARGIN_TOP, MARGIN_HORIZONTAL } from '../constants/layout';

export interface ContainerProps {
  isFocused: boolean;
}

export const HeaderWrapper = styled.aside`
  grid-row: 1;
`;

export const Content = styled.div.attrs({ id: 'main' })`
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

const Focus = css`
  ${FooterWrapper},
  ${HeaderWrapper} {
    display: none;
  }

  ${Content} {
    margin: 0px;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: repeat(3, auto);

  ${({ isFocused }) => (isFocused ? Focus : '')}
`;
