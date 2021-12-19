import styled from 'styled-components';

import { TitleMedium, TitleMediumProps } from '../../atoms/TitleMedium';

export type ContainerProps = TitleMediumProps

export const Container = styled(TitleMedium)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: clamp(1.2rem, 2.3vw + 0.3rem, 3vw);
  line-height: clamp(2.8vw, 5.3vw, 7vw);
  margin-left: 10px;
  align-self: center;
`;
