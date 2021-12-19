import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './titleMedium.fontConfig.css';

export type ContentProps = ElementBaseProps<'h1', object>;

export const Content = styled.h1<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  color: ${({ theme }: ContentProps) => theme?.text};
`;
