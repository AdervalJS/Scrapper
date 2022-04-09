import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { BR_MANGA_ALL } from '../../urls';
import { ChapterService } from '../chapter/chapter.service';
import {
  FindManga,
  FindUrlsByPage,
  ShouldIgnoreThisManga,
  ThereIsNextPage,
} from './manga.interfaces';
import {
  AUTHOR,
  GENRES,
  IMAGE,
  NAME,
  SYNOPSIS,
  URLS,
  NEXT_PAGE,
} from './manga.selectors';

@Injectable()
export class MangaService {
  constructor(@Inject(ChapterService) private chapterService: ChapterService) {}

  private shouldIgnoreThisManga(genres: string[]): ShouldIgnoreThisManga {
    const genreToIgnore = 'Hentai';
    const isIgnored = genres.includes(genreToIgnore);
    return isIgnored;
  }

  private async thereIsNextPage(page: Page): ThereIsNextPage {
    const exist = await page.$eval(
      NEXT_PAGE.selector,
      NEXT_PAGE.extractFunction
    );

    return exist;
  }

  async findManga(url: string, page: Page): FindManga {
    await page.goto(url);

    const genres = await page.$eval(GENRES.selector, GENRES.extractFunction);
    if (this.shouldIgnoreThisManga(genres)) return;

    const name = await page.$eval(NAME.selector, NAME.extractFunction);
    const image = await page.$eval(IMAGE.selector, IMAGE.extractFunction);
    const author = await page.$eval(AUTHOR.selector, AUTHOR.extractFunction);
    const synopsis = await page.$eval(
      SYNOPSIS.selector,
      SYNOPSIS.extractFunction
    );
    const chapters = await this.chapterService.findChapters(url, page);
    const date = new Date();

    return {
      name,
      image,
      author,
      genres,
      synopsis,
      createAt: date,
      updateAt: date,
      chapters,
      originUrl: url,
    };
  }

  async findUrlsByPage(page: Page, currentPage = 1): FindUrlsByPage {
    await page.goto(`${BR_MANGA_ALL}?page=${currentPage}`);

    const urls = await page.$$eval(URLS.selector, URLS.extractFunction);
    const nextPage = await this.thereIsNextPage(page);

    return { urls, nextPage };
  }
}
