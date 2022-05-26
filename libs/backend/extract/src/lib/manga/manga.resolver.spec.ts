import { Test } from '@nestjs/testing';
import { MangaResolver } from './manga.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PROFILE, PROFILE_URL } from '../dataFoTest';
import { MangaService } from './manga.service';
import { ChapterModule } from '../chapter/chapter.module';
import { Manga } from './manga.interfaces';

function testManga({ updateAt, createAt, ...mangaInfo }: Manga) {
  expect(typeof updateAt === 'object').toBeTruthy();
  expect(typeof createAt === 'object').toBeTruthy();
  expect(mangaInfo).toEqual(PROFILE);
}

describe('MangaResolver', () => {
  let mangaResolver: MangaResolver;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule, ChapterModule],
      providers: [MangaResolver, MangaService],
    }).compile();

    mangaResolver = await moduleRef.get<MangaResolver>(MangaResolver);
  });

  it('extrai as informações do manga e adicionar a data da criação e atualização', async () => {
    const manga = await mangaResolver.findManga(PROFILE_URL);

    testManga(manga);
  });

  it('extrai as informações e adicionar a data da criação e atualização de todos os mangas', async () => {
    for await (const manga of await mangaResolver.findMangasGen([
      PROFILE_URL,
      PROFILE_URL,
    ])) {
      testManga(manga);
    }
  }, 40000);

  it('extrai as urls dos mangas pagina por pagina', async () => {
    const maxPageToSearcher = 2;
    for await (const urls of await mangaResolver.findUrlsGen(
      maxPageToSearcher
    )) {
      urls.forEach((url) => {
        expect(typeof url === 'string').toBeTruthy();
      });
    }
  }, 40000);
});
