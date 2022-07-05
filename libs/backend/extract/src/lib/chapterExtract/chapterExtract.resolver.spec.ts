import { Test } from '@nestjs/testing';
import { ChapterExtractResolver } from './chapterExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PROFILE_URL } from '../dataFoTest';
import { ChapterExtracted } from './chapterExtract.interfaces';

export function testChapters(chapters: ChapterExtracted[]) {
  chapters.forEach(({ name, chapterNumber, originUrl }) => {
    expect(typeof name === 'string').toBeTruthy();
    expect(typeof chapterNumber === 'number').toBeTruthy();
    expect(typeof originUrl === 'string').toBeTruthy();
  });
}

describe('ChapterExtractResolver', () => {
  let chapterExtractResolver: ChapterExtractResolver;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [ChapterExtractResolver, ChapterServiceExtract],
    }).compile();

    chapterExtractResolver = await moduleRef.get<ChapterExtractResolver>(
      ChapterExtractResolver
    );
  });

  it('deveria extrair as informações dos capítulos', async () => {
    const chapters = await chapterExtractResolver.findChapters(PROFILE_URL);
    testChapters(chapters);
  });
});
