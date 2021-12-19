import styled, { css } from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'div', object>;

export const Wrapper = styled.aside`
  align-items: center;
  display: flex;
  width: 100%;

  #linkGroup #button {
    flex: none;
  }
`;

const mobile = css`
  display: grid;
  grid-template-rows: 1fr 1fr;

  #linkGroup {
    padding: 0px;
    justify-content: center;
    width: 100%;
  }

  #logoIcon {
    display: none;
  }

  #search {
    grid-row: 1;

    #searchIcon {
      display: none;
    }

    #input {
      text-align: center;
      border: 1px solid ${({ theme }) => theme.secondaryText};
      height: 20px;
    }
  }
`;

const desktop = css`
  @media only screen and (min-width: 782px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-template-rows: none;
      padding: 0px 30px;
      margin: 0px auto;
    }

    #search {
      border: none;

      #searchIcon {
        display: block;
      }
      #input {
        width: 100%;
        border: none;
        text-align: left;
      }
    }

    #logoIcon {
      display: block;
      height: 75px;
      margin-right: 19px;
    }

    #linkGroup {
      padding: 0px;
      margin-left: 200px
      width: 100%;

      justify-content: start;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  padding-top: 20px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 2000px;
  align-item: center;
  justify-content: center;

  ${mobile}
  ${desktop}
`;
