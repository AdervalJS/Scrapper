import styled from 'styled-components';
import { Card, CardProps } from '../../atoms/Card';

export type ContainerProps = CardProps;

export const Container = styled(Card)<ContainerProps>`
  padding: 10px;
  min-width: 240px;

  #dropSelectButton {
    width: 100%;
  }
`;

export const Content = styled.aside.attrs({
  className: 'content',
})<{ compacted: boolean }>`
  display: ${({ compacted }) => (compacted ? 'none' : 'grid')};
  grid-template-columns: repeat(2, 1fr);

  margin-top: 20px;
`;
