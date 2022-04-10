import { ThemeProvider } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { light } from '@scrapper/shared/assets';

interface Props {
  theme?: Theme;
  children: JSX.Element;
}

export const ThemeProviderWrapper: React.FC<Props> = ({ children, theme }) => {
  return (
    <ThemeProvider
      children={children}
      theme={theme ? theme : light}
    ></ThemeProvider>
  );
};
