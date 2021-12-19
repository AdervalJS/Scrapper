import { render } from '@testing-library/react';

import { MobileCard } from '.';

const LABEL = 'label';
const TEXT = 'text';

function setup() {
  return render(<MobileCard label={LABEL} text={TEXT} />);
}

describe('MobileCard', () => {
  it('deveria ter o mesmo texto que na variável LABEL', () => {
    const { getByText } = setup();

    expect(getByText(LABEL)).toBeTruthy();
  });

  it('deveria ter o mesmo texto que na variável TEXT', () => {
    const { getByText } = setup();

    expect(getByText(TEXT)).toBeTruthy();
  });
});
