import { Manga as MangaType } from '@scrapper/shared/util-interfaces';
import { Chapters } from '../chapter/chapter.interfaces';

export interface Manga extends Omit<MangaType, 'id' | 'view'> {
  chapters: Chapters;
  createAt: Date;
  updateAt: Date;
  originUrl: string;
}

export type FindManga = Promise<Manga>;
export type FindMangasGen = Promise<AsyncGenerator<Manga, void, unknown>>;
export type FindUrlsGen = Promise<AsyncGenerator<string[], void, unknown>>;
export type FindUrlsByPage = Promise<{ urls: string[]; nextPage: boolean }>;
export type ShouldIgnoreThisManga = boolean;
export type ThereIsNextPage = Promise<boolean>;
