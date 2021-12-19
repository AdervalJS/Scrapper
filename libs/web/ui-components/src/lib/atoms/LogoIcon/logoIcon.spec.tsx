import { render } from '@testing-library/react';
import { LogoIcon } from '.';

describe('logoIcon', () => {
  it('deveria ter a propriedade alt', () => {
    const { container } = render(<LogoIcon />);

    expect(container.firstChild).toHaveProperty('alt', 'LogoIcon');
  });

  it('deveria ter a propriedade src', () => {
    const { container } = render(<LogoIcon />);

    expect(container.firstChild).toHaveProperty(
      'src',
      'http://localhost/logo.svg'
    );
  });
});
