import { Test } from '@nestjs/testing';
import { MangaExtractResolver } from './mangaExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PROFILE, PROFILE_URL } from '../dataFoTest';
import { MangaExtractService } from './mangaExtract.service';
import { ChapterExtractModule } from '../chapterExtract/chapterExtract.module';
import { Manga } from './mangaExtract.interfaces';
import { testChapters } from '../chapterExtract/chapterExtract.resolver.spec';

function testManga({ updateAt, createAt, chapters, ...mangaInfo }: Manga) {
  expect(typeof updateAt === 'object').toBeTruthy();
  expect(typeof createAt === 'object').toBeTruthy();
  testChapters(chapters);
  expect(mangaInfo).toEqual(PROFILE);
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
  });

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
