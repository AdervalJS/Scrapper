import { render } from '@testing-library/react';
import { ItemCompactedIcon } from '.';

describe('itemCompacted', () => {
  it('deveria ter a propriedade alt', () => {
    const { container } = render(<ItemCompactedIcon />);

    expect(container.firstChild).toHaveProperty('alt', 'itemCompactedIcon');
  });

  it('deveria ter a propriedade src', () => {
    const { container } = render(<ItemCompactedIcon />);

    expect(container.firstChild).toHaveProperty(
      'src',
      'http://localhost/itemCompactedIcon.svg'
    );
  });
});
