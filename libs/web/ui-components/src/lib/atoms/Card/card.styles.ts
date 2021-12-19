import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<
  'div',
  {
    height?: string;
    width?: string;
  }
>;

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }: ContainerProps) => theme?.background};
  border-radius: clamp(24px, 0.3vw, 4rem);

  border: ${({ theme }: ContainerProps) => theme?.border} solid
    clamp(1px, 2px, 1rem);
  transition: box-shadow 0.2s;

  ${({ height }) => (height ? `height:${height};` : '')}
  ${({ width }) => (width ? `width:${width};` : '')}

  &:hover {
    box-shadow: 0px 0px clamp(4px, 0.3vw, 1rem)
      ${({ theme }: ContainerProps) => theme?.shadow};
  }
`;
