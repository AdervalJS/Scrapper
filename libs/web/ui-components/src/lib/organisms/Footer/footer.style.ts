import styled from 'styled-components';
import { Text } from '../../atoms/Text';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<'div', object>;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  background: linear-gradient(
    104.57deg,
    ${({ theme }) => theme.primary} 10.51%,
    ${({ theme }) => theme.secondary} 83.84%
  );
`;

export const Content = styled.div`
  display: flex:
  flex-direction: column;
  margin: 0px auto;
  margin-top: 30px;
  position: relative;

  max-width: 2600px;

  #gradientButtonArrowUp {
    position: absolute;
    right: 10%;
    top: -57px;
  }
`;

export const Copyright = styled(Text)`
  font-size: clamp(0.7rem, 0.3rem + 0.3vw, 2.5rem);
  line-height: clamp(1rem, 0.4rem + 0.5vw, 3rem);
  text-align: center;
  padding: 1% 3%;
  color: #fff;
`;

export const Shortcut = styled.aside.attrs({
  className: 'shortcut',
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 40px;

  #mobileCard {
    align-self: center;
    display: none;
    margin: auto;
    padding-right: 20px;
  }

  #linkGroup {
    #link,
    #title {
      color: #fff;
    }
  }

  /* desktop */
  @media only screen and (min-width: 1219px) {
    #mobileCard {
      align-self: center;
      display: grid;
    }

    & {
      display: grid;
      grid-template-columns: repeat(3, auto);
      padding: 30px 80px 70px 80px;
      grid-gap: 50px;
      justify-self: none;
      margin: 0px;
    }
  }
`;
