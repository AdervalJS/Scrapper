import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Content, ContentProps } from './text.styles';

export type TextProps = ContentProps;

export const Text: React.FC<TextProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="text" {...props} />;
};
