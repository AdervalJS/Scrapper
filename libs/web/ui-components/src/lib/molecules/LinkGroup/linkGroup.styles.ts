import styled, { css } from 'styled-components';
import { ElementBaseProps } from '../../interfaces';

export type ContainerProps = ElementBaseProps<
  'ul',
  {
    columns: boolean;
  }
>;

const columnsLayout = css`
  flex-direction: column;
  padding: 0px;
  margin: 0px;

  text-align: center;
`;

const rowLayout = css`
  #button {
    margin-right: 5px;
    padding: 5px 15px;
  }
`;

export const Container = styled.ul<ContainerProps>`
  display: flex;
  ${({ columns }) => (columns ? columnsLayout : rowLayout)}

  #title {
    font-size: clamp(1rem, 2vw + 0.8rem, 3.4vw);
    margin-bottom: 20px;
  }

  #link {
    font-size: clamp(0.7rem, 0.6rem + 0.3vw, 3rem);
    line-height: clamp(1rem, 0.6rem + 0.5vw, 3.5rem);
    margin-bottom: 1.3%;
  }
`;
