import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer/lib/types';
import { FindChapters, ChapterExtracted } from './chapterExtract.interfaces';
import { CHAPTERS } from './chapterExtract.selector';

@Injectable()
export class ChapterServiceExtract {
  async findChapters(url: string, page: Page): FindChapters {
    if (page.url() !== url) await page.goto(url);

    const chapters: ChapterExtracted[] | [] = await page
      .$$eval(CHAPTERS.selector, CHAPTERS.extractFunction)
      .catch((error) => {
        console.table({ url: page.url(), error });
        return [];
      });

    return chapters;
  }
}
