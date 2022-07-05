import { createChapterModuleRef } from './tools/moduleRef';
import { ChapterService } from './chapter.service';
import { TestingModule } from '@nestjs/testing';
import { testChapter } from './tools/testChapter';
import { findMangaToTest } from './tools/findMangaToTest';

describe('Chapter service', () => {
  let chapterService: ChapterService;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    await findMangaToTest();
    moduleRef = await createChapterModuleRef();
    chapterService = await moduleRef.get<ChapterService>(ChapterService);
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it('busca e salva o capitulo no banco de dados', async () => {
    const chapterId = 3;
    const chapter = await chapterService.find(chapterId);

    testChapter(chapter);
  }, 50000);
});
