import { ChapterBaseProps } from './chapter';

export interface MangaBaseProps {
  id: number;
  name: string;
  image: string;
}

export interface Manga extends MangaBaseProps {
  synopsis: string;
  author: string;
  genres: string[];
  view: number;
}

export interface MangaProfile extends Manga {
  chapters: ChapterBaseProps[];
  moreAuthor: Manga[];
  relation: Manga[];
}
