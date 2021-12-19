import styled from 'styled-components';
import { Card, CardProps } from '../../atoms/Card';

export type ContainerProps = CardProps;

export const Container = styled(Card)<ContainerProps>`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: clamp(5.6rem, 5vw, 10rem) auto;

  min-height: 80px;
  min-width: 254px;
  width: 500px;
  border-radius: clamp(2rem, 2vw, 3.5rem);
  padding: clamp(10px, 0.7vw, 1.5rem);

  cursor: pointer;

  #itemImage {
    border-radius: clamp(1.5rem, 1vw, 3rem);

    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-rows: auto 20px;
  padding: 10px 0px;

  align-items: center;
  flex-direction: column;

  #itemName {
    font-size: clamp(0.9rem, 1vw, 6rem);
  }

  #itemSynopsis {
    font-size: clamp(10px, 0.7vw, 2rem);

    line-height: clamp(13px, 0.8vw, 4rem);
    margin-top: 5px;
  }
`;

export const InfoContent = styled.div``;
export const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 0;

  #view {
    margin-right: 10px;
    z-index: 10;
  }

  #view #text {
    font-size: 10px;
  }

  #viewIcon,
  #bookIcon {
    width: clamp(13px, 0.3vw, 1rem);
  }

  #text {
    font-size: clamp(13px, 0.3vw, 1rem);
    line-height: 0px;
  }

  #read {
    padding: 2px 7px;
  }
`;
