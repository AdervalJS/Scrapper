import styled from 'styled-components';
import { MARGIN_TOP } from '../constants/layout';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
`;

export const Carousel = styled.aside`
  grid-row: 1;
`;

export const Reading = styled.div`
  margin-top: ${MARGIN_TOP};
  grid-row: 2;
`;

export const Updates = styled.div`
  margin-top: ${MARGIN_TOP};
  grid-row: 3;
`;

export const FeaturedTitle = styled.div`
  margin-top: ${MARGIN_TOP} + 40px;
  grid-row: 4;
`;

export const Featured = styled.div`
  margin-bottom: ${MARGIN_TOP};
  grid-row: 5;
`;

export const Banner = styled.div`
  margin: 0px 5vw;
  margin-top: ${MARGIN_TOP};
  grid-row: 6;
`;
