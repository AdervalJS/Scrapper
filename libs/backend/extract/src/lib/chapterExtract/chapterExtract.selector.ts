import { Selector } from '../../interfaces/selectors';
import { ChapterExtracted } from './chapterExtract.interfaces';

export const CHAPTERS: Selector<Element[], ChapterExtracted[]> = {
  selector: '#chapterlist > ul > li > div > div > a',
  extractFunction: (elements) =>
    elements
      .slice()
      .reverse()
      .map((e, index) => ({
        name: e?.querySelector('span').textContent,
        chapterNumber: index + 1,
        originUrl: e?.getAttribute('href'),
      })),
};
