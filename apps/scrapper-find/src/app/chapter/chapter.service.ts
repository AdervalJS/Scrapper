import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageResolverExtract } from '@scrapper/backend/extract';
import { ChapterEntity, ChapterModel } from '@scrapper/backend/models';
import { Repository } from 'typeorm';
import {
  FindChapterAndPagesResponse,
  FindResponse,
} from './dtos/responses.dto';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(ChapterModel)
    private chapterRepository: Repository<ChapterEntity>,
    private pageExtract: PageResolverExtract
  ) {}

  private async findChapterAndPages(
    id: number,
    chapterUrl: string
  ): Promise<FindChapterAndPagesResponse> {
    const pages = await this.pageExtract.findPages(chapterUrl);
    const chapter = await this.chapterRepository.save({ id, pages });

    return chapter;
  }

  async find(id: number): Promise<FindResponse> {
    let chapter = await this.chapterRepository.findOne(id, {
      relations: ['pages'],
    });

    if (chapter?.pages.length === 0) {
      const { pages: newPages } = await this.findChapterAndPages(
        id,
        chapter.originUrl
      );
      chapter = { ...chapter, pages: newPages };
    }

    return chapter;
  }
}
