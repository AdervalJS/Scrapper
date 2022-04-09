import { Test } from '@nestjs/testing';
import { ChapterExtract } from './chapter.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { ChapterService } from './chapter.service';
import { PROFILE_URL, PROFILE } from '../dataFoTest';

describe('ChapterExtract', () => {
  let chapterExtract: ChapterExtract;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [ChapterExtract, ChapterService],
    }).compile();

    chapterExtract = await moduleRef.get<ChapterExtract>(ChapterExtract);
  });

  it('deveria extrair as informações dos capítulos', async () => {
    const chapters = await chapterExtract.findChapters(PROFILE_URL);
    expect(chapters).toEqual(PROFILE.chapters);
  });
});
