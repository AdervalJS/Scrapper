import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './dropSelectOption.fontConfig.css';

export type ContainerProps = ElementBaseProps<
  'div',
  { selected: boolean; width?: string; height?: string }
>;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ContainerProps) => theme?.background};

  width: ${({ width }: ContainerProps) => (width ? width : '100%')};
  min-height: 35px;
  ${({ height }: ContainerProps) => (height ? `height:${height};` : '')}

  border-radius: 10px;
  cursor: pointer;

  #titleMedium {
    color: ${({ selected, theme }: ContainerProps) =>
      selected ? theme?.secondary : theme?.text};
    font-size: clamp(0.87rem, 1rem, 1vw);
  }

  &:hover {
    background-color: rgba(216, 216, 216, 0.74);
  }
`;
