import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './titleShadow.fontConfig.css';

export type ContentProps = ElementBaseProps<'h1', object>;

export const Content = styled.h1<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: clamp(1vw, 7vw, 15vw);
  line-height: clamp(2vw, 10vw, 11vw);
  text-shadow: 0px 9px 7px ${({ theme }: ContentProps) => theme?.shadow};

  text-align: center;

  color: ${({ theme }: ContentProps) => theme?.text};
`;
