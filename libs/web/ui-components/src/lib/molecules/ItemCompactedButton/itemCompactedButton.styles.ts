import styled from 'styled-components';
import { Button, ButtonProps } from '../../atoms/Button';

export type ContainerProps = ButtonProps;

export const Container = styled(Button)<ContainerProps>`
  height: 50px;
  width: 50px;

  border-radius: 10px;
`;
