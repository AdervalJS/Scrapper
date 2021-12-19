import styled from 'styled-components';

import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<
  'div',
  {
    line: number;
  }
>;

export const Container = styled.div<ContainerProps>`
  overflow: hidden;

  h1,
  h2,
  h3,
  span,
  label,
  p,
  b {
    display: -webkit-box;
    -webkit-line-clamp: ${({ line }) => line};
    -webkit-box-orient: vertical;
  }
`;
