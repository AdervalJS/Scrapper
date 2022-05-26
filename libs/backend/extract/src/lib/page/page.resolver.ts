import { Inject, Injectable } from '@nestjs/common';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import { FindPages } from './page.interfaces';
import { PageService } from './page.service';

@Injectable()
export class PageResolver {
  constructor(
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig,
    @Inject(PageService) private pageService: PageService
  ) {}

  async findPages(url: string): FindPages {
    const { page: brwPage, browser } = await this.browser.get();
    const pages = await this.pageService.findPages(url, brwPage);
    await browser.close();

    return pages;
  }
}
