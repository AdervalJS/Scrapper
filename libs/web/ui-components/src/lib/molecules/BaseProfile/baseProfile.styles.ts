import styled, { css } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { Button } from '../../atoms/Button';
import { ElementBaseProps } from '../../interfaces';

type ViewType = 'banner' | 'cover';

// eslint-disable-next-line
export type ContainerProps = ElementBaseProps<
  'aside',
  {
    viewType: ViewType;
  }
>;

function handleViewType(viewType: ViewType) {
  switch (viewType) {
    case 'banner':
      return BannerViewer;
    case 'cover':
      return CoverViewer;
    default:
      return BannerViewer;
  }
}

export const Line = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme?.text};
  height: 0.8px;
  margin: 1% 20%;
  margin-bottom: 1.2%;
`;

export const Genres = styled.div`
  margin: 0px auto;
  margin-top: 1%;
  margin-bottom: 1.4%;
`;

export const Genre = styled(Button).attrs({
  className: 'genre',
})`
  display: inline;
  margin: 0px 2px;
`;

export const Info = styled.div`
  margin-top: 50px;

  #itemName {
    margin: 0px;
    font-size: clamp(1.3rem, 1.3rem + 2vw, 20rem);
    line-height: clamp(1.5rem, 2rem + 2.3vw, 20.2rem);
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

export const Status = styled.div`
  display: flex;
  margin-top: 20px
`;

export const Options = styled.div`
  display: flex;
`;

const CoverViewer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  #itemName,
  #itemSynopsis {
    margin: 0 20px;
  }

  #itemImage {
    margin: 0 auto;
    width: auto;
    height: calc(230px + 3vh);
  }

  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: minmax(230px, 280px) 1fr;
    grid-template-rows: auto auto auto auto;
    text-align: left;

    #itemSynopsis {
      grid-row: 3;
      margin: 0 20px;
      text-align: center;
    }

    #itemName {
      margin: 0;
      margin-right: 30px;
    }

    #itemSynopsis,
    ${Footer}, ${Genres} {
      grid-column: 1 / 3;
    }

    ${Line} {
      margin: 0px;
      margin-right: 60%;
    }

    ${Genres} {
      grid-row: 2;
    }

    #read {
      grid-row: 4;
    }
  }
`;

const BannerViewer = css`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  #itemImage {
    display: none;
    width: 300px;
  }
`;

export const Container = styled.aside<ContainerProps>`
  ${({ viewType }) => handleViewType(viewType)}

  #read {
    margin-top: 3%;
    height: 40px;
  }
`;
