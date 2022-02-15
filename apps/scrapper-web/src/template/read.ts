import styled, { css } from 'styled-components';
import {
  BlurryImage,
  BlurryImageProps,
  List,
} from '@scrapper/web/ui-components';
import { DESKTOP_WIDTH, MARGIN_HORIZONTAL } from '../constants/layout';

export interface ContainerProps extends BlurryImageProps {
  reading: boolean;
}

export const Pages = styled(List)<{ reading: boolean }>`
  padding: 10px 0;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
`;

export const Content = styled.div`
  margin-top: 10px;
  align-items: center;
`;

const Reading = css`
  ${Content} {
    display: none;
    margin-top: 0px;
  }

  ${Pages} {
    padding: 0;
    margin-top: 0;
  }

  ${Header} {
    display: none;
  }

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    .blurry-image-content {
      display: grid;
      grid-template-columns: none;
      grid-template-rows: none;
    }
  }
`;

const noReading = css`
  .blurry-image-content {
    display: grid;
    align-items: center;
  }

  @media only screen and (min-width: ${DESKTOP_WIDTH}) {
    .blurry-image-content {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: minmax(200px, 300px) auto;
      grid-template-rows: auto auto;
      padding: ${MARGIN_HORIZONTAL};
    }

    ${Header} {
      grid-row: 1;
      grid-column: 1 /3;
    }

    ${Content} {
      grid-row: 2;
      grid-column: 1;
    }

    ${Pages} {
      grid-row: 2;
      grid-column: 2;
    }
  }
`;

export const Container = styled(BlurryImage)<ContainerProps>`
  max-width: 100vw;
  overflow: hidden;

  ${({ reading }) => (reading ? Reading : noReading)}
`;
