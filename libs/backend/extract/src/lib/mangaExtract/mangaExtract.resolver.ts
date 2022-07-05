import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import {
  FindManga,
  FindMangasGen,
  FindUrlsGen,
} from './mangaExtract.interfaces';
import { MangaExtractService } from './mangaExtract.service';

@Injectable()
export class MangaExtractResolver {
  constructor(
    @Inject(MangaExtractService)
    private MangaExtractService: MangaExtractService,
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig
  ) {}

  async findManga(url: string): FindManga {
    const { browser, page } = await this.browser.get();
    const profile = await this.MangaExtractService.findManga(url, page);
    await browser.close();

    return profile;
  }

  async findMangasGen(urls: string[]): FindMangasGen {
    const { browser, page } = await this.browser.get();

    const findManga = async (url: string) =>
      this.MangaExtractService.findManga(url, page);

    async function* findMangasGen() {
      for (const url of urls) {
        const manga = await findManga(url);
        yield manga;
      }
      await browser.close();
    }

    return findMangasGen();
  }

  async findUrlsGen(maxPageToSearcher?: number): FindUrlsGen {
    const { browser, page: brwPage } = await this.browser.get();

    const findUrlsByPage = async (pageToFindUrl: number, page: Page) =>
      await this.MangaExtractService.findUrlsByPage(page, pageToFindUrl);

    async function* findUrlsGen() {
      let currentPage = 1;
      let isFindUrls = true;

      while (
        (isFindUrls && currentPage <= maxPageToSearcher) ||
        maxPageToSearcher === undefined
      ) {
        isFindUrls = false;
        const { urls, nextPage } = await findUrlsByPage(currentPage, brwPage);

        currentPage++;
        isFindUrls = nextPage;

        yield urls;
      }

      await browser.close();
    }

    return findUrlsGen();
  }
}
