import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Content, ContentProps } from './titleMedium.styles';

export type TitleMediumProps = ContentProps;

export const TitleMedium: React.FC<TitleMediumProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="titleMedium" {...props} />;
};
