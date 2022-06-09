import { Inject, Injectable } from '@nestjs/common';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import { FindChapters } from './chapterExtract.interfaces';
import { ChapterServiceExtract } from './chapterExtract.service';

@Injectable()
export class ChapterExtractResolver {
  constructor(
    @Inject(ChapterServiceExtract)
    private ChapterServiceExtract: ChapterServiceExtract,
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig
  ) {}

  async findChapters(url: string): FindChapters {
    const { browser, page } = await this.browser.get();
    const chapters = await this.ChapterServiceExtract.findChapters(url, page);
    await browser.close();

    return chapters;
  }
}
