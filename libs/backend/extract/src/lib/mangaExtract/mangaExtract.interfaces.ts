import { MangaEntity } from '@scrapper/backend/models';
import { ChapterExtracted } from '../chapterExtract/chapterExtract.interfaces';

export interface MangaExtracted
  extends Omit<
    MangaEntity,
    'id' | 'view' | 'chapters' | 'createAt' | 'updateAt'
  > {
  chapters: ChapterExtracted[];
}

export type FindManga = Promise<MangaExtracted>;
export type FindMangasGen = Promise<
  AsyncGenerator<MangaExtracted, void, unknown>
>;
export type FindUrlsGen = Promise<AsyncGenerator<string[], void, unknown>>;
export type FindUrlsByPage = Promise<{ urls: string[]; nextPage: boolean }>;
export type ShouldIgnoreThisManga = boolean;
export type ThereIsNextPage = Promise<boolean>;
