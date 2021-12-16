import {
  MangaReadProp,
  getRecentlyReads,
  removeRecentlyRead,
  setRecentlyRead,
} from './recentlyRead';

const manga: MangaReadProp = {
  id: 2,
  chapterId: 1,
  image: '',
  name: 'bleach',
};

const newManga: MangaReadProp = {
  id: manga.id,
  chapterId: 2,
  image: 'image url',
  name: 'new name',
};

describe('recentlyRead', () => {
  it('o storage deveria está vazio', () => {
    const mangaInStorage = getRecentlyReads();

    expect(mangaInStorage).toEqual([]);
  });

  it('deveria adicionar um novo manga', () => {
    const mangaInStorage = setRecentlyRead(manga);

    expect(mangaInStorage).toEqual([manga]);
  });

  it('deveria atualizar o manga', () => {
    const mangaInStorage = setRecentlyRead(newManga);

    expect(mangaInStorage).toEqual([newManga]);
  });

  it('deveria remover o manga do storage', () => {
    const mangaInStorage = removeRecentlyRead(manga.id);

    expect(mangaInStorage).toEqual([]);
  });
});
