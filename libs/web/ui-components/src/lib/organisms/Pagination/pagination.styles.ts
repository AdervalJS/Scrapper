import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'div', object>;

export const Container = styled.div<ContainerProps>`
  #button {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 3px;

    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s box-shadow;
  }

  #text {
    color: #000;
    margin: auto auto;
  }
`;
