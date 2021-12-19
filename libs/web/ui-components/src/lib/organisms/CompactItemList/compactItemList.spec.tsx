import { fireEvent } from '@testing-library/dom';
import { customRender, mangas, manga } from '@scrapper/web/util-test';

import { CompactItemList } from '.';

const TITLE = 'CompactItemList';

const onPick = jest.fn((e) => {
  expect(e).toEqual(manga);
});

function setup() {
  return customRender(
    <CompactItemList data={mangas} title={TITLE} onPick={onPick} />
  );
}

describe('CompactItemList', () => {
  it('deveria mostrar o mesmo texto da variável TITLE', () => {
    const { getById } = setup();

    expect(getById('title').textContent).toEqual(TITLE);
  });

  it('a quantidade de items deveria ser igual a quantidade de mangas', () => {
    const { getAllById } = setup();

    expect(getAllById('itemCompacted').length).toEqual(mangas.length);
  });

  it('deveria ter uma unica chamada ao evento onPick', () => {
    const { getAllById } = setup();

    const item = getAllById('itemCompacted')[0];

    fireEvent.click(item);

    expect(onPick.mock.calls.length).toEqual(1);
  });
});
