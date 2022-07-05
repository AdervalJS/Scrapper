import { PageModel } from '@scrapper/backend/models';

export type PageExtracted = Omit<PageModel, 'id' | 'chapter'>;
export type FindPages = Promise<PageExtracted[]>;
