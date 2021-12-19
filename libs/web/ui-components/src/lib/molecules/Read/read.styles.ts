import styled from 'styled-components';
import {
  GradientButton,
  GradientButtonProps,
} from '../../atoms/GradientButton';

export type ContainerProps = GradientButtonProps;

export const Container = styled(GradientButton)<ContainerProps>`
  display: flex;
  align-items: center;

  #text {
    color: #fff;
  }

  #bookIcon {
    margin-right: 7px;
  }
`;
