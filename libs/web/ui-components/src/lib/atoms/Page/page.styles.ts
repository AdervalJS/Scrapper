import styled, { css } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { ElementBaseProps } from '../../interfaces';

export type ContentProps = ElementBaseProps<
  'img',
  {
    isCompacted: boolean;
  }
>;

const normal = css`
  width: auto;
  height: 100vh;
  max-width: 100%;
  flex: none;
  object-fit: contain;

  @media only screen and (min-width: 1200px) {
    & {
      max-width: 50%;
    }
  }
`;

const compacted = css`
  width: 70vw;
  max-width: 370px;
  height: 60vh;

  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${({ theme }: { theme: Theme }) => theme.shadow};
`;

export const Content = styled.img<ContentProps>`
  ${({ isCompacted }) => (isCompacted ? normal : compacted)}
`;
