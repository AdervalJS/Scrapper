import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './text.fontConfig.css';

export type ContentProps = ElementBaseProps<'p', object>;

export const Content = styled.p<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: clamp(0.87rem, 1rem, 1vw);

  color: ${({ theme }: ContentProps) => theme?.secondaryText};
`;
