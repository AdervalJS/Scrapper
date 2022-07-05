import { MangaExtracted } from '@scrapper/backend/extract';
import { MangaEntity } from '@scrapper/backend/models';

export type FindAllGenResponse = AsyncGenerator<MangaExtracted, void, unknown>;
export type FindAndSaveAllGen = AsyncGenerator<MangaEntity, void, unknown>;

export type MergerResponse = MangaEntity | MangaExtracted;
