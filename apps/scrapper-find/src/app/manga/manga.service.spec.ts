import { TestingModule } from '@nestjs/testing';
import { createMangaModuleRef } from './tools/moduleRef';
import { MangaService } from './manga.service';

describe('manga service', () => {
  let mangaService: MangaService;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await createMangaModuleRef();
    mangaService = await moduleRef.get<MangaService>(MangaService);
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it('', async () => {
    const mangaGen = await mangaService.findAllGen({
      maxPage: 1,
      searchOnlyOne: true,
    });

    for await (const manga of mangaGen) {
      expect(typeof manga.name === 'string').toEqual(true);
      expect(typeof manga.image === 'string').toEqual(true);
      expect(typeof manga.author === 'string').toEqual(true);
      expect(typeof manga.synopsis === 'string').toEqual(true);
      expect(typeof manga.originUrl === 'string').toEqual(true);

      manga.genres.forEach((genre) => {
        expect(typeof genre === 'string').toEqual(true);
      });

      manga.chapters.forEach((chapter) => {
        expect(typeof chapter.name === 'string').toBeTruthy();
        expect(typeof chapter.originUrl === 'string').toBeTruthy();
        expect(typeof chapter.chapterNumber === 'number').toBeTruthy();
      });
    }
  }, 50000);
});
