import styled from 'styled-components';
import { Card, CardProps } from '../../atoms/Card';

export type ContainerProps = CardProps;

export const Container = styled(Card)<ContainerProps>`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  width: 100px;
  min-height: 170px;

  #itemImage {
    border-radius: 17px;
  }

  #itemName {
    text-align: center;
  }
`;
