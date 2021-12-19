import { render } from '@testing-library/react';
import { ItemSimpleIcon } from '.';

describe('itemSimpleIcon', () => {
  it('deveria ter a propriedade alt', () => {
    const { container } = render(<ItemSimpleIcon />);

    expect(container.firstChild).toHaveProperty('alt', 'itemSimpleIcon');
  });

  it('deveria ter a propriedade src', () => {
    const { container } = render(<ItemSimpleIcon />);

    expect(container.firstChild).toHaveProperty(
      'src',
      'http://localhost/itemSimpleIcon.svg'
    );
  });
});
