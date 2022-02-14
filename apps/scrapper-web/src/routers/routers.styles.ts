import styled, { createGlobalStyle } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import * as template from '../template/main';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding:0px;
  }
`;

export type ContainerProps = template.ContainerProps;

export const Container = styled(template.Container)`
  background-color: ${({ theme }: { theme: Theme }) => theme.background};
`;

export const HeaderWrapper = styled(template.HeaderWrapper)``;

export const Content = styled(template.Content)``;

export const FooterWrapper = styled(template.FooterWrapper)``;
