import styled, { css } from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'div', object>;

const Item = (id: string) => css`
  #${id} {
    margin: 0px 3px;
    scroll-snap-align: start;
  }
`;

export const Controllers = styled.div.attrs({
  className: 'controllers',
})<{ disable: boolean }>`
  display: ${({ disable }) => (disable ? 'none' : 'flex')};
  align-items: center;
  width: 100%;

  position: absolute;
  top: 0px;
  bottom: 0px;

  pointer-events: none;

  opacity: 0;
  transition: 0.5s;

  #indicatorLeftButton {
    position: absolute;
    left: 3px;
  }

  #indicatorRightButton {
    position: absolute;
    right: 3px;
  }

  #indicatorLeftButton,
  #indicatorRightButton {
    width: clamp(30px, 30px + 0.6vw, 20rem);
    height: clamp(30px, 30px + 0.6vw, 20rem);
    pointer-events: all;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  position: relative;

  #title {
    margin-bottom: 20px;
    margin-left: 14px;
    font-size: clamp(1rem, 1.5rem, 2rem);
    line-height: clamp(2.1vw, 2vw, 3rem);
  }

  &:hover ${Controllers} {
    opacity: 1;
  }
`;

export const Wrapper = styled.div.attrs({
  className: 'wrapper',
})`
  display: flex;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.aside.attrs({
  className: 'content',
})<{ itemId?: string }>`
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 6px 0px;
  width: 100%;

  ${({ itemId }) => (itemId ? Item(itemId) : '')}
  &::-webkit-scrollbar {
    display: none;
  }
`;
