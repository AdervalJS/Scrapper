import { ThemeProvider } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { light } from '@scrapper/shared/assets';

export const ThemeProviderWrapper: React.FC<{ theme?: Theme }> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme ? theme : light}>{children}</ThemeProvider>
  );
};
