import styled from 'styled-components';
import { Button, ButtonProps } from '../../atoms/Button';

export type ContainerProps = ButtonProps;

export const Container = styled(Button)<ContainerProps>`
  border: ${({ theme }: ContainerProps) => theme?.border} solid
    clamp(1px, 2px, 1rem);
`;
