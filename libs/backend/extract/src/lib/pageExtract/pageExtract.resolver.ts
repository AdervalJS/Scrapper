import { Inject, Injectable } from '@nestjs/common';
import { PuppeteerConfig } from '../PuppeteerConfig/puppeteerConfig.conf';
import { FindPages } from './pageExtract.interfaces';
import { PageServiceExtract } from './pageExtract.service';

@Injectable()
export class PageResolverExtract {
  constructor(
    @Inject(PuppeteerConfig) private browser: PuppeteerConfig,
    @Inject(PageServiceExtract) private PageServiceExtract: PageServiceExtract
  ) {}

  async findPages(url: string): FindPages {
    const { page: brwPage, browser } = await this.browser.get();
    const pages = await this.PageServiceExtract.findPages(url, brwPage);
    await browser.close();

    return pages;
  }
}
