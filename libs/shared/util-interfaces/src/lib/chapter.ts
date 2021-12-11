import { Manga } from './manga';

export interface ChapterBaseProps {
  id: number;
  name: string;
}

export interface Chapter extends ChapterBaseProps {
  manga: Manga;
  pages: Page[];
  nextChapter: Chapter;
}

export interface Page {
  id: number;
  url: string;
  pageNumber: number;
  chapter: Chapter;
}
