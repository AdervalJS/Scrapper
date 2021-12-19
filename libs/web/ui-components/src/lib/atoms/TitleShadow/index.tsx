import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Content, ContentProps } from './titleShadow.styles';

export type TitleShadowProps = ContentProps;

export const TitleShadow: React.FC<TitleShadowProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="titleShadow" {...props} />;
};
