import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContentProps = ElementBaseProps<'input', object>;

export const Content = styled.input<ContentProps>`
  background: ${({ theme }: ContentProps) => theme?.background};

  border: none;
  border-radius: 30px;

  height: 24px;
  padding: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${({ theme }: ContentProps) => theme?.text};
  line-height: 12px;

  outline: none;
`;
