import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { Content, ContentProps } from './input.styles';

export type InputProps = ContentProps;

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme() as Theme;

  return <Content theme={theme} id="input" {...props} />;
};
