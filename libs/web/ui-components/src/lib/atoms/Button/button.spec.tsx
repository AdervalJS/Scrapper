import { act, fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { Button } from '.';

const onClick = jest.fn();

describe('button', () => {
  it('o evento onClick deveria ser chamado', () => {
    const { getByRole } = customRender(<Button onClick={onClick} />);

    act(() => {
      fireEvent.click(getByRole('button'));
    });

    const { type } = onClick.mock.results[0];

    expect(type).toEqual('return');
  });
});
