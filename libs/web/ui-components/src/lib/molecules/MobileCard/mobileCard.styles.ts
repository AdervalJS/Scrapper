import styled from 'styled-components';
import { Card, CardProps } from '../../atoms/Card';

export type ContainerProps = CardProps

export const Container = styled(Card)<ContainerProps>`
  display: grid;
  grid-template-columns: clamp(110px, 4rem + 3.5vw, 26rem) auto;
  grid-gap: clamp(18px, 0.8rem + 0.2vw, 8rem);
  padding: clamp(12px, 0.7rem + 0.2vw, 10rem);
`;

export const MobileIcon = styled.div`
  display: grid;
  flex: none;
  justify-content: center;
  align-items: center;
  background: #282828;

  border-radius: clamp(30px, 1rem + 0.7vw, 3rem);
  width: clamp(110px, 4rem + 3.5vw, 26rem);
  height: clamp(110px, 4rem + 3.5vw, 26rem);

  #logoIcon {
    height: clamp(60px, 4rem + 1.7vw, 18rem);
  }
`;

export const MobileInfoLeft = styled.div`
  margin: auto 0px;
  #title {
    color: black;
    margin: 0px;

    font-size: clamp(21px, 21px + 0.7vw, 5rem);
    line-height: clamp(28px, 21px + 1.6vw, 5.8rem);
  }

  #text {
    color: #646464;
    margin: 0px;
    font-size: clamp(0.67rem, 1rem, 1vw);
  }
`;
