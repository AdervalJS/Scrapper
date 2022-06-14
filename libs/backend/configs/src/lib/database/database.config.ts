import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterModel, MangaModel, PageModel } from '@scrapper/backend/models';
import ormConfig from './orm.cli.config';

export const DataBaseConfigs = () =>
  TypeOrmModule.forRoot({
    ...ormConfig,
    entities: [MangaModel, ChapterModel, PageModel],
  });
