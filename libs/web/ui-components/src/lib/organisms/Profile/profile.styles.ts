import styled from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

// eslint-disable-next-line
export type ContainerProps = ElementBaseProps<'aside', {}>;

export const Container = styled.aside<ContainerProps>`
  border-radius: 20px;
  padding-bottom: 2%;
  height: 86vh;

  overflow: hidden;
  overflow-y: scroll;
  position: relative;

  box-shadow: 0px 0px 30px ${({ theme }: ContainerProps) => theme?.shadow};
  background-color: ${({ theme }: ContainerProps) => theme?.background};

  #blurryImage {
    .content {
      border-radius: 20px;
    }
  }

  .closeButton {
    position: fixed;
    top: 0;
    right: 0;
    margin: 40px;
    z-index: 50;
  }

  #simpleItemList {
    margin-top: 30px;
  }

  .baseProfile {
    padding-top: 80px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div.attrs({ className: 'wrapper' })`
  display: flex;
  flex-direction: column;

  #title {
    text-align: center;
  }
`;
