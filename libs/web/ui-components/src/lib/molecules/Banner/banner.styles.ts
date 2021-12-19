import styled from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Button, ButtonProps } from '../../atoms/Button/index';

export type ContainerProps = ButtonProps;

export const Genre = styled(Button).attrs({
  id: 'genre',
})`
  display: inline;
  margin: 0px 2px;
`;

export const Genres = styled.div`
  margin: 0px auto;
  margin-top: 3%;
  margin-bottom: 1.4%;
`;

export const Line = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme?.text};
  height: 0.8px;
  margin: 1% 20%;
  margin-bottom: 1.2%;
`;

export const Container = styled.aside<ContainerProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-width: 270px;

  #itemImage {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 20px;
    object-fit: cover;
    box-shadow: none;
    border-radius: 0px;
  }
`;

export const Content = styled.div`
  background: linear-gradient(
      90deg,
      #fafafa 0%,
      rgba(250, 250, 250, 0.5) 33.78%,
      rgba(250, 250, 250, 0.5) 70.1%,
      #fafafa 100%
    ),
    linear-gradient(
      180.14deg,
      #fafafa 1%,
      rgba(250, 250, 250, 0.6) 30.53%,
      rgba(250, 250, 250, 0.7) 39.33%,
      #fafafa 90%
    );

  backdrop-filter: blur(9px);

  padding: 8% 7%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  #itemName {
    margin: 0px;
    font-size: clamp(1.3rem, 1.3rem + 2vw, 20rem);
    line-height: clamp(1.5rem, 2rem + 2.3vw, 20.2rem);
  }

  #read {
    margin: 0px auto;
    margin-top: 3%;
    height: 40px;
  }

  #
`;
