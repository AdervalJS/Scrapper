import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity, PageModel } from '@scrapper/backend/models';
import { DeepPartial, Repository } from 'typeorm';

export class PageTools {
  constructor(
    @InjectRepository(PageModel)
    private pageRepository: Repository<PageEntity>
  ) {}

  merge(mergeIntoEntity: PageEntity[], entityLike?: DeepPartial<PageEntity>[]) {
    const merge = entityLike?.map((newPage) => {
      const currentInDb = mergeIntoEntity?.filter(
        (pageInDB) => pageInDB.pageNumber === newPage.pageNumber
      )[0];

      return currentInDb
        ? this.pageRepository.merge(currentInDb, newPage)
        : newPage;
    }) as PageEntity[];

    return merge;
  }
}
