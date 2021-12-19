import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<
  'button',
  {
    height?: string;
    width?: string;
    keepPressed?: boolean;
  }
>;

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ keepPressed, theme }: ContainerProps) =>
    keepPressed ? theme?.primary : theme?.card};
  border: none;
  border-radius: 30px;
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};

  min-width: 30px;
  min-height: 30px;

  cursor: pointer;
  transition: 0.3s;

  ${({ height }) => (height ? `height:${height};` : '')}
  ${({ width }) => (width ? `width:${width};` : '')}

  &:hover {
    box-shadow: 0px 0px 7px ${({ theme }: ContainerProps) => theme?.shadow};
  }
`;
