import { fireEvent } from '@testing-library/dom';
import { customRender } from '@scrapper/web/util-test';
import { mangas, mangasBase } from '@scrapper/shared/util-test';
import { SimpleItemList } from '.';

const TITLE = 'SimpleItemList';
const DATA = mangasBase.map((manga, index) => ({
  ...manga,
  chapterId: index,
}));

const onPick = jest.fn((e) => {
  expect(e).toEqual(DATA[0]);
});

function setup() {
  return customRender(
    <SimpleItemList data={DATA} title={TITLE} onPick={onPick} />
  );
}

describe('SimpleItemList', () => {
  it('deveria mostrar o mesmo texto da variável TITLE', () => {
    const { getById } = setup();

    expect(getById('title').textContent).toEqual(TITLE);
  });

  it('a quantidade de items deveria ser igual a quantidade de mangas', () => {
    const { getAllById } = setup();

    expect(getAllById('itemSimple').length).toEqual(mangas.length);
  });

  it('deveria ter uma chamada ao evento onPick', () => {
    const { getAllById } = setup();

    const item = getAllById('itemSimple')[0];

    fireEvent.click(item);

    expect(onPick.mock.calls.length).toEqual(1);
  });
});
