import { manga } from '@scrapper/shared/util-test';
import { customRender } from '@scrapper/web/util-test';
import { BaseProfile, BaseProfileProps } from '.';

function setup(props: Omit<BaseProfileProps, 'data'>) {
  return customRender(<BaseProfile {...props} data={manga} />);
}

describe('baseProfile', () => {
  it('deveria ter uma imagem de perfil', () => {
    const { getByAltText } = setup({ viewType: 'cover' });

    expect(getByAltText(manga.name)).toHaveProperty('src', manga.image);
  });

  it('deveria ter o nome do manga', () => {
    const { rerender, getByText } = setup({ viewType: 'banner' });

    expect(getByText(manga.name)).toBeTruthy();

    rerender(<BaseProfile viewType="cover" data={manga} />);
    expect(getByText(manga.name)).toBeTruthy();
  });

  it('deveria ter a sinopse do manga', () => {
    const { rerender, getByText } = setup({ viewType: 'banner' });

    expect(getByText(manga.synopsis)).toBeTruthy();

    rerender(<BaseProfile viewType="cover" data={manga} />);
    expect(getByText(manga.synopsis)).toBeTruthy();
  });

  it('deveria ter o nome do autor', () => {
    const { rerender, getByText } = setup({ viewType: 'banner' });

    expect(getByText(manga.author)).toBeTruthy();

    rerender(<BaseProfile viewType="cover" data={manga} />);
    expect(getByText(manga.author)).toBeTruthy();
  });

  it('o componente de leitura deveria ser renderizado', () => {
    const { rerender, getById } = setup({ viewType: 'banner' });

    expect(getById('read')).toBeTruthy();

    rerender(<BaseProfile viewType="cover" data={manga} />);
    expect(getById('read')).toBeTruthy();
  });

  it('os gêneros devem ser iguais aos do manga', () => {
    const { rerender, getByText } = setup({ viewType: 'banner' });

    function testGenres() {
      const { genres } = manga;

      for (const genre of genres) {
        expect(getByText(genre)).toBeTruthy();
      }
    }

    testGenres();

    rerender(<BaseProfile viewType="cover" data={manga} />);

    testGenres();
  });
});
