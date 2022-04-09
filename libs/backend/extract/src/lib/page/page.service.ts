import { Injectable } from '@nestjs/common';
import { Page as BrwPage } from 'puppeteer';
import { FindPages } from './page.interfaces';
import { PAGES } from './page.selector';

@Injectable()
export class PageService {
  async findPages(url: string, brwPage: BrwPage): FindPages {
    await brwPage.goto(url);
    const pages = await brwPage.$$eval(PAGES.selector, PAGES.extractFunction);

    return pages;
  }
}
