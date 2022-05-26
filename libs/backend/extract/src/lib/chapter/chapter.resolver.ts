import { Inject, Injectable } from '@nestjs/common';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import { FindChapters } from './chapter.interfaces';
import { ChapterService } from './chapter.service';

@Injectable()
export class ChapterResolver {
  constructor(
    @Inject(ChapterService) private chapterService: ChapterService,
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig
  ) {}

  async findChapters(url: string): FindChapters {
    const { browser, page } = await this.browser.get();
    const chapters = await this.chapterService.findChapters(url, page);
    await browser.close();

    return chapters;
  }
}
