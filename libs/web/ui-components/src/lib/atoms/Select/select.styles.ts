import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContentProps = ElementBaseProps<'select', object>;

export const Content = styled.select<ContentProps>`
  border: none;
  border-radius: 0px;
  border-bottom: 1.4px solid black;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1.2rem, 2.3vw + 0.3rem, 3vw);
  line-height: clamp(2.8vw, 5.3vw, 7vw);
  color: ${({ theme }: ContentProps) => theme?.text};

  margin-left: 10px;
  align-self: center;
  outline: none;

  background-color: ${({ theme }: ContentProps) => theme?.background};
`;
