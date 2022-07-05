import { ChapterModel } from '@scrapper/backend/models';

export type ChapterExtracted = Omit<ChapterModel, 'manga' | 'pages' | 'id'>;
export type FindChapters = Promise<ChapterExtracted[] | []>;
