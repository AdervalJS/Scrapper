import { TestingModule } from '@nestjs/testing';
import { createMangaModuleRef } from './tools/moduleRef';
import { MangaResolver } from './manga.resolver';

describe('manga resolver', () => {
  let mangaResolver: MangaResolver;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await createMangaModuleRef();
    mangaResolver = await moduleRef.get<MangaResolver>(MangaResolver);
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it('', async () => {
    const mangaGen = await mangaResolver.findAndSaveAllGen({
      maxPage: 1,
      searchOnlyOne: true,
    });

    for await (const manga of mangaGen) {
      expect(typeof manga.id === 'number').toEqual(true);
      expect(typeof manga.name === 'string').toEqual(true);
      expect(typeof manga.image === 'string').toEqual(true);
      expect(typeof manga.author === 'string').toEqual(true);
      expect(typeof manga.synopsis === 'string').toEqual(true);
      expect(typeof manga.view === 'number').toEqual(true);
      expect(typeof manga.originUrl === 'string').toEqual(true);
      expect(typeof manga.createAt === 'object').toEqual(true);
      expect(typeof manga.updateAt === 'object').toEqual(true);

      manga.genres.forEach((genre) => {
        expect(typeof genre === 'string').toEqual(true);
      });

      manga.chapters.forEach((chapter) => {
        expect(typeof chapter.id === 'number').toBeTruthy();
        expect(typeof chapter.name === 'string').toBeTruthy();
        expect(typeof chapter.originUrl === 'string').toBeTruthy();
        expect(typeof chapter.chapterNumber === 'number').toBeTruthy();
      });
    }
  }, 50000);
});
