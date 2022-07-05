import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerConfig implements OnModuleDestroy {
  browsers: { id: string; browser: puppeteer.Browser }[] = [];

  async onModuleDestroy() {
    for await (const { browser } of this.browsers) {
      await browser.close();
    }
  }

  private createBrowserId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  async get() {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const [page] = await browser.pages();
    await page.setDefaultNavigationTimeout(40000);

    const bwID = this.createBrowserId();
    this.browsers.push({ id: bwID, browser });

    return {
      browser: {
        ...browser,
        close: async () => {
          this.browsers = this.browsers.filter(({ id }) => id !== bwID);
          await browser.close();
        },
      },
      page,
    };
  }
}
