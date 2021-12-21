import { render } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

describe('home page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
