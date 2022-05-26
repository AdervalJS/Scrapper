import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaModel } from '@scrapper/backend/models';
import ormConfig from './orm.cli.config';

export const DataBaseConfigs = () =>
  TypeOrmModule.forRoot({ ...ormConfig, entities: [MangaModel] });
