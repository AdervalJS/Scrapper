import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './title.fontConfig.css';

export type ContentProps = ElementBaseProps<'h1', object>;

export const Content = styled.h1<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(2vw, 3.2vw + 1rem, 4vw);
  line-height: clamp(2.8vw, 5.3vw, 7vw);

  color: ${({ theme }: ContentProps) => theme?.text};
`;
