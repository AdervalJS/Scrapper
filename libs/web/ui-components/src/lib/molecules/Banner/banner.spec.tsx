import { customRender } from '@scrapper/web/util-test';
import { manga } from '@scrapper/web/util-test';
import { Banner } from '.';

function setup() {
  return customRender(<Banner data={manga} />);
}

describe('Banner', () => {
  it('deveria ter uma image', () => {
    const { getByAltText } = setup();

    expect(getByAltText(manga.name)).toHaveProperty('src', manga.image);
  });

  it('deveria ter o nome do manga', () => {
    const { getByText } = setup();

    expect(getByText(manga.name)).toBeTruthy();
  });

  it('deveria ter a sinopse do manga', () => {
    const { getByText } = setup();

    expect(getByText(manga.synopsis)).toBeTruthy();
  });

  it('deveria ter o nome do autor', () => {
    const { getByText } = setup();

    expect(getByText(manga.author)).toBeTruthy();
  });

  it('o componente de leitura deveria ser renderizado', () => {
    const { getById } = setup();

    expect(getById('read')).toBeTruthy();
  });

  it('os gêneros devem ser iguais aos do manga', () => {
    const { getAllById } = setup();

    const genres = getAllById('genre').map((item) => item.textContent);

    expect(genres).toEqual(manga.genres);
  });
});
