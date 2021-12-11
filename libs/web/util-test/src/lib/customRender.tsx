import { ReactElement } from 'react';
import { render, RenderOptions, queries } from '@testing-library/react';
import { customQueries } from './customQueries';
import { RecoilWrapper } from './recoilWrapper';

export function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) {
  const data = render(ui, {
    ...options,
    queries: { ...queries, ...customQueries },
    wrapper: RecoilWrapper,
  });

  return data;
}
