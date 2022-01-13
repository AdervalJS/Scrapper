import styled from 'styled-components';
import { BlurryImage, BlurryImageProps } from '../BlurryImage';

export type ContainerProps = BlurryImageProps;

export const Container = styled(BlurryImage)<ContainerProps>`
  .content {
    #baseProfile {
      padding: 8% 7%;
    }
  }
`;
