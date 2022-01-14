import styled from 'styled-components';
import * as template from '../../template/search';
import { DESKTOP_WIDTH, MOBILE_WIDTH } from '../../constants/layout';

export const Container = styled(template.container)``;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    #filterButton {
      display: none;
    }
  }
`;

export const ListWrapper = styled(template.ListWrapper)`
  #toggleList .header .header-options {
    display: none;
  }

  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    #toggleList .header .header-options {
      display: flex;
    }
  }
`;

export const FiltersWrapper = styled(template.FiltersWrapper)`
  #filters #gradientButton {
    width: 100%;
    margin-top: 20px;
    color: #fff;
  }

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    #filters #gradientButton {
      display: none;
    }
  }
`;

export const PaginationWrapper = styled(template.PaginationWrapper)``;
