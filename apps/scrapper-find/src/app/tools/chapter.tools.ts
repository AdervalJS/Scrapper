import { InjectRepository } from '@nestjs/typeorm';
import { ChapterEntity, ChapterModel } from '@scrapper/backend/models';
import { DeepPartial, Repository } from 'typeorm';
import { PageTools } from './page.tools';

export class ChapterTools {
  constructor(
    @InjectRepository(ChapterModel)
    private chapterRepository: Repository<ChapterEntity>,
    private pageTools: PageTools
  ) {}

  merge(
    mergeIntoEntity: ChapterModel[],
    entityLike: DeepPartial<ChapterModel>[]
  ) {
    const merge = entityLike.map((newChapter) => {
      const currentInDb = mergeIntoEntity.filter(
        (chapterInDB) => chapterInDB.chapterNumber === newChapter.chapterNumber
      )[0];

      return currentInDb
        ? {
            ...this.chapterRepository.merge(currentInDb, newChapter),
            pages: this.pageTools.merge(currentInDb.pages, newChapter?.pages),
          }
        : newChapter;
    }) as ChapterEntity[];

    return merge;
  }
}
