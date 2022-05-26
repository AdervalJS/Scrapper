import { Test } from '@nestjs/testing';
import { PageResolver } from './page.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageService } from './page.service';
import { CHAPTER_URL } from '../dataFoTest';
import { Pages } from './page.interfaces';

export function pagesTest(pages: Pages) {
  pages.forEach(({ pageNumber, url }) => {
    expect(typeof pageNumber === 'number').toBeTruthy();
    expect(typeof url === 'string').toBeTruthy();
  });
}

describe('PageResolver', () => {
  let pageResolver: PageResolver;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [PageResolver, PageService],
    }).compile();

    pageResolver = await moduleRef.get<PageResolver>(PageResolver);
  });

  it('extrai as paginas do capítulo', async () => {
    const pages = await pageResolver.findPages(CHAPTER_URL);
    pagesTest(pages);
  }, 4000);
});
