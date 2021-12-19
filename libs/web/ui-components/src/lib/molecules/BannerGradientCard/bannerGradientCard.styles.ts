import styled from 'styled-components';
import { GradientCard, GradientCardProps } from '../../atoms/GradientCard';
import { GradientButton } from '../../atoms/GradientButton';

export type ContainerProps  = GradientCardProps

export const Container = styled(GradientCard)<ContainerProps>`
  padding: 20px 30px;
  border-radius: 30px;

  #title,
  #text {
    color: #fff;
  }
  #title {
    font-size: clamp(14px, 30px + 1vw, 10vw);
    line-height: clamp(35px, 31px + 1vw, 7vw);
  }

  #text {
    font-size: clamp(12px, 2px + 1vw, 2vw);
  }
`;

export const Button = styled(GradientButton)`
  margin-left: auto;
  margin-top: 30px;

  transform: scale(0.8);

  box-shadow: 0px 0px 4px black;

  #text {
    line-height: 3px;
    font-size: clamp(15px, 7px + 0.3vw, 1vw);
  }

  #arrowRight {
    margin-left: 20px;
  }
`;
