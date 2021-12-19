import { render } from '@testing-library/react';
import { View } from '.';

const VIEW = 20;

describe('View', () => {
  it('as visualizações deveriam ser iguais aos da variável VIEW', () => {
    const { getByText } = render(<View view={VIEW} />);
    expect(getByText(VIEW)).toBeTruthy();
  });
});
