import { render } from '@testing-library/react';
import { FilterIcon } from '.';

describe('filterIcon', () => {
  it('deveria ter a propriedade size', () => {
    const size = 20;
    const { container } = render(<FilterIcon size={size} />);
    const EHight = container.querySelector('svg')?.getAttribute('height');

    expect(Number(EHight)).toEqual(size);
  });

  it('deveria ter a propriedade color', () => {
    const color = '#FFF';
    const { container } = render(<FilterIcon color={color} />);

    const EColor = container.querySelector('svg')?.getAttribute('color');

    expect(EColor).toEqual(color);
  });
});
