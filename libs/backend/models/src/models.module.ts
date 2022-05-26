import { Module } from '@nestjs/common';
import { BaseManga } from './lib/manga.base';
import { MangaModel } from './lib/manga.model';

@Module({
  providers: [MangaModel, BaseManga],
  exports: [MangaModel, BaseManga],
})
export class ModelModule {}
