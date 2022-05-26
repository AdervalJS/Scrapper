import { Test } from '@nestjs/testing';
import { ChapterResolver } from './chapter.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { ChapterService } from './chapter.service';
import { PROFILE_URL } from '../dataFoTest';
import { Chapters } from './chapter.interfaces';

export function testChapters(chapters: Chapters) {
  chapters.forEach(({ name, chapterNumber, originUrl }) => {
    expect(typeof name === 'string').toBeTruthy();
    expect(typeof chapterNumber === 'number').toBeTruthy();
    expect(typeof originUrl === 'string').toBeTruthy();
  });
}

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
    testChapters(chapters);
  });
});
