import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer/lib/types';
import { FindChapters } from './chapter.interfaces';
import { CHAPTERS } from './chapter.selector';

@Injectable()
export class ChapterService {
  async findChapters(url: string, page: Page): FindChapters {
    if (page.url() !== url) await page.goto(url);

    const chapters = await page
      .$$eval(CHAPTERS.selector, CHAPTERS.extractFunction)
      .catch((error) => {
        console.table({ url: page.url(), error });
        return [];
      });

    return chapters;
  }
}
