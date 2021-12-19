import { fireEvent } from '@testing-library/react';
import { customRender, manga } from '@scrapper/web/util-test';
import { Read } from '.';

describe('Read', () => {
  it('os eventos onClick e onPick deveriam ser chamados', () => {
    const { getById } = customRender(
      <Read onClick={onClick} onPick={onPick} data={{ itemId: manga.id }} />
    );

    fireEvent.click(getById('read'));

    const onClickResults = onClick.mock.results;
    expect(onClickResults).toHaveLength(1);
    expect(onClickResults[0].type).toEqual('return');

    const onPickResults = onPick.mock.results;
    expect(onPickResults).toHaveLength(1);
    expect(onPickResults[0].type).toEqual('return');
  });
});

// eslint-disable-next-line
const onClick = jest.fn(() => {});
const onPick = jest.fn((e) => {
  expect(e).toEqual({ itemId: manga.id });
});
