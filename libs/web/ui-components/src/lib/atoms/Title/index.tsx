import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Content, ContentProps } from './title.styles';

export type TitleProps = ContentProps;

export const Title: React.FC<TitleProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="title" {...props} />;
};
