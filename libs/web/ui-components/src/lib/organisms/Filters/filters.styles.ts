import styled from 'styled-components';
import { Card, CardProps } from '../../atoms/Card';

export type ContainerProps = CardProps;

export const Container = styled(Card)<ContainerProps>`
  padding: 10px;

  #dropSelect {
    margin: 5px 0px;
  }
`;
