import { fireEvent } from '@testing-library/react';
import { ItemCompacted } from '.';
import { customRender, manga } from '@scrapper/web/util-test';

function setup() {
  return customRender(
    <ItemCompacted onClick={onClick} onPick={onPick} data={manga} />
  );
}

describe('ItemCompacted', () => {
  it('deveria ter uma imagem', () => {
    const { getByRole } = setup();

    expect(getByRole('img')).toHaveProperty('src', manga.image);
  });

  it('deveria ter o nome do manga', () => {
    const { getByText } = setup();

    expect(getByText(manga.name)).toBeTruthy();
  });

  it('deveria ter a sinopse do manga', () => {
    const { getByText } = setup();

    expect(getByText(manga.synopsis)).toBeTruthy();
  });

  it('os eventos onClick e onPick deveriam ser chamados', () => {
    const { getById } = setup();

    fireEvent.click(getById('itemCompacted'));

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
  expect(e).toEqual(manga);
});
