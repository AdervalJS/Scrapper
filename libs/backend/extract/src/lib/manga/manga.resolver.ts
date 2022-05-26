import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import { FindManga, FindMangasGen, FindUrlsGen } from './manga.interfaces';
import { MangaService } from './manga.service';

@Injectable()
export class MangaResolver {
  constructor(
    @Inject(MangaService) private mangaService: MangaService,
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig
  ) {}

  async findManga(url: string): FindManga {
    const { browser, page } = await this.browser.get();
    const profile = await this.mangaService.findManga(url, page);
    await browser.close();

    return profile;
  }

  async findMangasGen(urls: string[]): FindMangasGen {
    const { browser, page } = await this.browser.get();

    const findManga = async (url: string) =>
      this.mangaService.findManga(url, page);

    async function* findMangasGen() {
      for (const url of urls) {
        const manga = await findManga(url);
        yield manga;
      }
      browser.close();
    }

    return findMangasGen();
  }

  async findUrlsGen(maxPageToSearcher?: number): FindUrlsGen {
    const { browser, page: brwPage } = await this.browser.get();

    const findUrlsByPage = async (pageToFindUrl: number, page: Page) =>
      await this.mangaService.findUrlsByPage(page, pageToFindUrl);

    async function* findUrlsGen() {
      let currentPage = 1;
      let isFindUrls = true;

      while (isFindUrls && currentPage !== maxPageToSearcher) {
        const { urls, nextPage } = await findUrlsByPage(currentPage, brwPage);

        currentPage++;
        isFindUrls = nextPage;

        yield urls;
      }

      browser.close();
    }

    return findUrlsGen();
  }
}
