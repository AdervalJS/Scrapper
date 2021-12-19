import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './ItemSynopsis.fontConfig.css';

export type ContentProps = ElementBaseProps<'p', object>;

export const Content = styled.p<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: clamp(12px, 0.7vw, 3rem);

  line-height: clamp(16px, 0.8vw, 4rem);

  color: ${({ theme }) => theme?.text};
`;
