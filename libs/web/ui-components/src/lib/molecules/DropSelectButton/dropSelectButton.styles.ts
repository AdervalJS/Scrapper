import styled from 'styled-components';

import { GradientButton, GradientButtonProps } from '../../atoms/GradientButton';

export type ContainerProps = GradientButtonProps

export const Container = styled(GradientButton)<ContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 3px black;
  }

  #titleMedium {
    margin-right: 10px;
    color: #fff;

    font-size: clamp(10px, 0,8vw, 2rem);
    line-height: clamp(13px, 0.8vw, 4rem);
  }
`;
