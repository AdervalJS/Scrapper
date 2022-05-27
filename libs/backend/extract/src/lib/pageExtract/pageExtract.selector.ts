import { Selector } from '../../interfaces/selectors';
import { Pages } from './pageExtract.interfaces';

export const PAGES: Selector<Element[], Pages> = {
  selector: '#readerarea > img',
  extractFunction: (e) =>
    Array.from(e).map((page, index) => ({
      url: page.getAttribute('src'),
      pageNumber: index + 1,
    })),
};
