import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'div', object>;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  #viewIcon {
    margin-right: 4px;
  }
`;
