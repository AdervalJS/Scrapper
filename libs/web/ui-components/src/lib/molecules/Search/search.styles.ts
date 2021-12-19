import styled from 'styled-components';
import {ElementBaseProps} from '../../interfaces'

export type ContainerProps = ElementBaseProps<'div', object>

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  #input {
    width: 300px;
    border-radius: 30px;
  }
`;
