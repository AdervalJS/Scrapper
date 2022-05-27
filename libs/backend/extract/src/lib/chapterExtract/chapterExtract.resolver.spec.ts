import { Test } from '@nestjs/testing';
import { ChapterResolverExtract } from './chapterExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PROFILE_URL } from '../dataFoTest';
import { Chapters } from './chapterExtract.interfaces';

export function testChapters(chapters: Chapters) {
  chapters.forEach(({ name, chapterNumber, originUrl }) => {
    expect(typeof name === 'string').toBeTruthy();
    expect(typeof chapterNumber === 'number').toBeTruthy();
    expect(typeof originUrl === 'string').toBeTruthy();
  });
}

describe('ChapterResolverExtract', () => {
  let chapterResolverExtract: ChapterResolverExtract;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [ChapterResolverExtract, ChapterServiceExtract],
    }).compile();

    chapterResolverExtract = await moduleRef.get<ChapterResolverExtract>(
      ChapterResolverExtract
    );
  });

  it('deveria extrair as informações dos capítulos', async () => {
    const chapters = await chapterResolverExtract.findChapters(PROFILE_URL);
    testChapters(chapters);
  });
});
