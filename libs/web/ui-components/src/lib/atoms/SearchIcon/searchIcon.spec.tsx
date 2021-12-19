import { render } from '@testing-library/react';
import { SearchIcon } from '.';

describe('searchIcon', () => {
  it('deveria ter a propriedade size', () => {
    const size = 20;
    const { container } = render(<SearchIcon size={size} />);
    const EHight = container.querySelector('svg')?.getAttribute('height');

    expect(Number(EHight) === size).toBeTruthy();
  });

  it('deveria ter a propriedade color', () => {
    const color = '#FFF';
    const { container } = render(<SearchIcon color={color} />);

    const EColor = container.querySelector('svg')?.getAttribute('color');

    expect(EColor === color).toBeTruthy();
  });
});
