import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions, queries } from '@testing-library/react';
import { Theme } from '@scrapper/shared/util-interfaces';
import { customQueries } from './customQueries';
import { RecoilWrapper } from './recoilWrapper';
import { ThemeProviderWrapper } from './themeProviderWrapper';

interface Options extends Omit<RenderOptions, 'queries'> {
  theme?: Theme;
}

export function customRender(ui: ReactElement, options?: Options) {
  const data = render(ui, {
    ...options,
    queries: { ...queries, ...customQueries },
    wrapper: ({ children }) => (
      <BrowserRouter>
        <RecoilWrapper>
          <ThemeProviderWrapper theme={options?.theme}>
            {children}
          </ThemeProviderWrapper>
        </RecoilWrapper>
      </BrowserRouter>
    ),
  });

  return data;
}
