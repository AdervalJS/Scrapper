import styled from 'styled-components';
import { Card, CardProps } from '../Card';

export type ContentProps = CardProps;

export const Content = styled(Card)<ContentProps>`
  background: linear-gradient(
    110.05deg,
    ${({ theme }: ContentProps) => theme?.primary} 35.47%,
    ${({ theme }: ContentProps) => theme?.secondary} 78.85%
  );
  border: none;
  border-radius: 6px;
`;
