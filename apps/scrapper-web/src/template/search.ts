import styled, {css} from 'styled-components';
import { DESKTOP_WIDTH, MARGIN_HORIZONTAL } from '../constants/layout';

export const ListWrapper = styled.div``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    & {
      justify-content: left;
    }
  }
`;

export const FiltersWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    & {
      display: block;
    }
  }
`;

const filtersEnabled = css`
  ${FiltersWrapper} {
    display: block;
  }

  ${PaginationWrapper} {
    display: none;
  }
  ${ListWrapper} {
    display: none;
  }
`;

export const container = styled.div<{ filtersVisible: boolean }>`
  display: grid;

  grid-template-rows: auto 40px;
  grid-gap: 30px;
  min-height: 70vh;
  margin-top: 50px;
  margin: ${MARGIN_HORIZONTAL};

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    & {
      grid-template-columns: auto minmax(200px, 380px);
      margin: 0px;
    }
  }

  ${({filtersVisible}) => filtersVisible ? filtersEnabled : ''}
`;
