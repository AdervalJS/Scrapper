import { act, fireEvent } from '@testing-library/react';
import { customRender } from '@scrapper/web/util-test';
import { Card } from '.';

const onClick = jest.fn();

describe('card', () => {
  it('o evento onClick deveria ser chamado', () => {
    const { getByText } = customRender(<Card onClick={onClick}>card</Card>);

    act(() => {
      fireEvent.click(getByText('card'));
    });

    const { type } = onClick.mock.results[0];

    expect(type).toEqual('return');
  });
});
