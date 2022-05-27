import { Page } from '@scrapper/shared/util-interfaces';

export type Pages = Omit<Page, 'id'>[];
export type FindPages = Promise<Pages>;
