import { Test } from '@nestjs/testing';
import { ChapterResolver } from './chapter.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { ChapterService } from './chapter.service';
import { PROFILE_URL } from '../dataFoTest';

describe('ChapterResolver', () => {
  let chapterResolver: ChapterResolver;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [ChapterResolver, ChapterService],
    }).compile();

    chapterResolver = await moduleRef.get<ChapterResolver>(ChapterResolver);
  });

  it('deveria extrair as informações dos capítulos', async () => {
    const chapters = await chapterResolver.findChapters(PROFILE_URL);
    expect(chapters).toEqual(PROFILE.chapters);
  });
});
