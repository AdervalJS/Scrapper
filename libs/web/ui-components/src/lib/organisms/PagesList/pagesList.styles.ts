import styled, { css } from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<
  'aside',
  {
    timeTransition: string;
    isFocused: boolean;
  }
>;

const noFocused = css`
  padding: 10px 0;

  .page {
    margin: 0 4px;
  }
`;

export const Container = styled('aside')<ContainerProps>`
  display: flex;
  overflow-x: auto;

  ${({ isFocused }) => (isFocused ? '' : noFocused)}

  .page {
    flex: none;

    transition-property: height;
    transition-duration: ${({ timeTransition }) => timeTransition};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
