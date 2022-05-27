import { Test } from '@nestjs/testing';
import { PageResolverExtract } from './pageExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageServiceExtract } from './pageExtract.service';
import { CHAPTER_URL } from '../dataFoTest';
import { Pages } from './pageExtract.interfaces';

export function pagesTest(pages: Pages) {
  pages.forEach(({ pageNumber, url }) => {
    expect(typeof pageNumber === 'number').toBeTruthy();
    expect(typeof url === 'string').toBeTruthy();
  });
}

describe('PageResolverExtract', () => {
  let pageResolverExtract: PageResolverExtract;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PuppeteerConfigModule],
      providers: [PageResolverExtract, PageServiceExtract],
    }).compile();

    pageResolverExtract = await moduleRef.get<PageResolverExtract>(
      PageResolverExtract
    );
  });

  it('extrai as paginas do capítulo', async () => {
    const pages = await pageResolverExtract.findPages(CHAPTER_URL);
    pagesTest(pages);
  }, 4000);
});
