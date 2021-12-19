import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContentProps = ElementBaseProps<'img', object>;

export const Content = styled.img<ContentProps>`
  height: ${({ height }) => (height ? height : '145px')};
  width: ${({ width }) => (width ? width : '96px')};
  border-radius: 10px;
  box-shadow: 0px 0px 6px ${({ theme }: ContentProps) => theme?.shadow};
`;
