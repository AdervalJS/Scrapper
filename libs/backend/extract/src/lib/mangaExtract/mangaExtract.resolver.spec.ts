import { Test } from '@nestjs/testing';
import { MangaExtractResolver } from './mangaExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PROFILE_URL } from '../dataFoTest';
import { MangaExtractService } from './mangaExtract.service';
import { ChapterExtractModule } from '../chapterExtract/chapterExtract.module';
import { MangaExtracted } from './mangaExtract.interfaces';

function testManga({ chapters, genres, ...manga }: MangaExtracted) {
  expect(typeof manga.name === 'string').toEqual(true);
  expect(typeof manga.image === 'string').toEqual(true);
  expect(typeof manga.author === 'string').toEqual(true);
  expect(typeof manga.synopsis === 'string').toEqual(true);
  expect(typeof manga.originUrl === 'string').toEqual(true);

  genres.forEach((genre) => {
    expect(typeof genre === 'string').toEqual(true);
  });

  chapters.forEach((chapter) => {
    expect(typeof chapter.name === 'string').toBeTruthy();
    expect(typeof chapter.originUrl === 'string').toBeTruthy();
    expect(typeof chapter.chapterNumber === 'number').toBeTruthy();
  });
}

describe('MangaExtractResolver', () => {
  let mangaExtractResolver: MangaExtractResolver;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule, ChapterExtractModule],
      providers: [MangaExtractResolver, MangaExtractService],
    }).compile();

    mangaExtractResolver = await moduleRef.get<MangaExtractResolver>(
      MangaExtractResolver
    );
  });

  it('extrai as informações do manga e adicionar a data da criação e atualização', async () => {
    const manga = await mangaExtractResolver.findManga(PROFILE_URL);

    testManga(manga);
  }, 40000);

  it('extrai as informações e adicionar a data da criação e atualização de todos os mangas', async () => {
    for await (const manga of await mangaExtractResolver.findMangasGen([
      PROFILE_URL,
      PROFILE_URL,
    ])) {
      testManga(manga);
    }
  }, 40000);

  it('extrai as urls dos mangas pagina por pagina', async () => {
    const maxPageToSearcher = 2;
    for await (const urls of await mangaExtractResolver.findUrlsGen(
      maxPageToSearcher
    )) {
      urls.forEach((url) => {
        expect(typeof url === 'string').toBeTruthy();
      });
    }
  }, 40000);
});
