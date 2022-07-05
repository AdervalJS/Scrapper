import { INestApplication } from '@nestjs/common';
import { ChapterEntity, PageModel } from '@scrapper/backend/models';
import { pages } from '@scrapper/shared/util-test';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { createChapterModuleRef } from './tools/moduleRef';
import { findMangaToTest } from './tools/findMangaToTest';

describe('Chapter controller', () => {
  let app: INestApplication;
  let chapterController: ChapterController;
  let chapterService: ChapterService;

  beforeAll(async () => {
    await findMangaToTest();
    const moduleRef = await createChapterModuleRef();
    app = await moduleRef.createNestApplication();

    chapterService = await moduleRef.get<ChapterService>(ChapterService);
    chapterController = await moduleRef.get<ChapterController>(
      ChapterController
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('busca o capitulo', async () => {
    const result = {
      id: 1,
      name: 'chapter-1',
      chapterNumber: 1,
      pages: pages as PageModel[],
      originUrl: 'dsao',
    } as ChapterEntity;

    jest.spyOn(chapterService, 'find').mockImplementation(async () => result);
    expect(await chapterController.find(1)).toBe(result);
  });
});
