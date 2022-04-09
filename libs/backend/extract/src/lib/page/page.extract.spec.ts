import { Test } from '@nestjs/testing';
import { PageExtract } from './page.extract';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageService } from './page.service';
import { PAGES, PROFILE } from '../dataFoTest';

describe('pageExtract', () => {
  let pageExtract: PageExtract;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [PageExtract, PageService],
    }).compile();

    pageExtract = await moduleRef.get<PageExtract>(PageExtract);
  });

  it('extrai as paginas do capítulo', async () => {
    const pages = await pageExtract.findPages(PROFILE.chapters[0].originUrl);
    expect(pages).toEqual(PAGES);
  }, 4000);
});
