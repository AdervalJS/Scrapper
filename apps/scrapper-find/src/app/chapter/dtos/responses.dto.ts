import { PageEntity } from '@scrapper/backend/models';
import { ChapterModel } from '@scrapper/backend/models';

export class FindChapterAndPagesResponse {
  id: number;
  pages: PageEntity[];
}

export class FindResponse extends ChapterModel {}
