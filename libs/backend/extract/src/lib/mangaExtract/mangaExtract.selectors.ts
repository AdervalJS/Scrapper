import { Selector } from '../../interfaces/selectors';

export const GENRES: Selector<Element, string[]> = {
  selector:
    'div.seriestucontent > div.seriestucontentr > div.seriestucont > div > div',
  extractFunction: (e) => e.textContent.split(' '),
};

export const IMAGE: Selector<Element, string> = {
  selector:
    'div.seriestucon > div.seriestucontent > div.seriestucontl > div.thumb > img',
  extractFunction: (e) => e?.getAttribute('src'),
};

export const SYNOPSIS: Selector<Element, string> = {
  selector: 'div.seriestuhead > div.entry-content.entry-content-single > p',
  extractFunction: (e) => e?.textContent,
};

export const NAME: Selector<Element, string> = {
  selector: 'div.seriestucon > div.seriestuheader > h1',
  extractFunction: (e) => e?.textContent,
};

export const AUTHOR: Selector<Element, string> = {
  selector:
    '.seriestucont > div > table > tbody > tr:nth-child(4) > td:nth-child(2)',
  extractFunction: (e) => e?.textContent,
};

export const URLS: Selector<Element[], string[]> = {
  selector: '.mrgn > div.listupd > div > div > a',
  extractFunction: (elements) => {
    return Array.from(elements)?.map((element) =>
      element?.getAttribute('href')
    );
  },
};

export const NEXT_PAGE: Selector<Element, boolean> = {
  selector: '.seriesearch > .mrgn > .hpage > .r',
  extractFunction: (e) => (e ? true : false),
};
