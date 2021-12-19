import styled from 'styled-components';
import { Button, ButtonProps } from '../Button';

export type ContentProps = ButtonProps;

export const Content = styled(Button)<ContentProps>`
  background: linear-gradient(
    110.05deg,
    ${({ theme }: ContentProps) => theme?.primary} 35.47%,
    ${({ theme }: ContentProps) => theme?.secondary} 78.85%
  );
  border-radius: 20px;

  padding: 3px 14px;
  border: none;

  cursor: pointer;
`;
