import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

import './itemName.fontConfig.css';

export type ContentProps = ElementBaseProps<'b', object>;

export const Content = styled.b<ContentProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  color: ${({ theme }) => theme?.text};
`;
