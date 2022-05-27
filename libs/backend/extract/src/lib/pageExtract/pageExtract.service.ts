import { Injectable } from '@nestjs/common';
import { Page as BrwPage } from 'puppeteer';
import { FindPages } from './pageExtract.interfaces';
import { PAGES } from './pageExtract.selector';

@Injectable()
export class PageServiceExtract {
  async findPages(url: string, brwPage: BrwPage): FindPages {
    await brwPage.goto(url);
    const pages = await brwPage.$$eval(PAGES.selector, PAGES.extractFunction);

    return pages;
  }
}
