import { Selector } from '../../interfaces/selectors';
import { PageExtracted } from './pageExtract.interfaces';

export const PAGES: Selector<Element[], PageExtracted[]> = {
  selector: '#readerarea > img',
  extractFunction: (e) =>
    Array.from(e).map((page, index) => ({
      url: page.getAttribute('src'),
      pageNumber: index + 1,
    })),
};
