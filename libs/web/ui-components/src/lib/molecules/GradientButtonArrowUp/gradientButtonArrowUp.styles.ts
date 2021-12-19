import styled from 'styled-components';
import {
  GradientButton,
  GradientButtonProps,
} from '../../atoms/GradientButton';

export type ContainerProps = GradientButtonProps;

export const Container = styled(GradientButton)<ContainerProps>`
  border-radius: 90px;
  width: 60px;
  height: 60px;

  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
`;
