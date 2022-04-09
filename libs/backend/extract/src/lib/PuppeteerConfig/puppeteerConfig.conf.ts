import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerConfig {
  async get() {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const [page] = await browser.pages();
    await page.setDefaultNavigationTimeout(40000);

    return { browser, page };
  }
}
