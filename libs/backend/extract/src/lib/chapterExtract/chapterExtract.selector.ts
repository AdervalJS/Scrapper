import { Selector } from '../../interfaces/selectors';
import { Chapters } from './chapterExtract.interfaces';

export const CHAPTERS: Selector<Element[], Chapters> = {
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
