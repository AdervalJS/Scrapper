import { MangaBaseProps } from './manga';

export interface ChapterBaseProps {
  id: number;
  name: string;
}

export interface Chapter extends ChapterBaseProps {
  manga: MangaBaseProps;
  pages: Page[];
  nextChapter: ChapterBaseProps;
}

export interface Page {
  id: number;
  url: string;
  pageNumber: number;
}
