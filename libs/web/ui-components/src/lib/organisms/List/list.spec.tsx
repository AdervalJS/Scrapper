import { customRender } from '@scrapper/web/util-test';
import { mangas } from '@scrapper/web/util-test';
import { ItemCompacted } from '../../molecules/ItemCompacted';

import { List } from '.';

const TITLE = 'List';

function setup() {
  return customRender(
    <List title={TITLE}>
      {mangas.map((manga) => (
        <ItemCompacted key={manga.id} data={manga} />
      ))}
    </List>
  );
}

describe('List', () => {
  it('deveria mostrar o mesmo texto da variável TITLE', () => {
    const { getById } = setup();

    expect(getById('title').textContent).toEqual(TITLE);
  });

  it('a quantidade de items deveria ser igual a quantidade de mangas', () => {
    const { getAllById } = setup();

    expect(getAllById('itemCompacted').length).toEqual(mangas.length);
  });
});
