import styled from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'aside', object>;

export const Container = styled.aside<ContainerProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-width: 270px;

  .bg {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 20px;
    object-fit: cover;
    box-shadow: none;
    border-radius: 0px;
  }
`;

export const Content = styled.div.attrs({
  className: 'content',
})`
  background: linear-gradient(
      90deg,
      ${({ theme }: { theme: Theme }) => theme.background} 0%,
      rgba(250, 250, 250, 0.5) 33.78%,
      rgba(250, 250, 250, 0.5) 70.1%,
      ${({ theme }: { theme: Theme }) => theme.background} 100%
    ),
    linear-gradient(
      180.14deg,
      ${({ theme }: { theme: Theme }) => theme.background} 1%,
      rgba(250, 250, 250, 0.6) 30.53%,
      rgba(250, 250, 250, 0.7) 39.33%,
      ${({ theme }: { theme: Theme }) => theme.background} 90%
    );

  backdrop-filter: blur(9px);

  height: 100%;
`;
