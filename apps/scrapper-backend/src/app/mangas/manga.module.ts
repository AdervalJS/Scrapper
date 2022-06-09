import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ChapterModule } from 'src/chapters/chapter.module';
import { MangaResolver } from './manga.resolver';
import { MangaService } from './manga.service';
import { MangaLoader } from './manga.loader';

import { MangaModel } from '@scrapper/backend/models';

@Module({
  imports: [TypeOrmModule.forFeature([MangaModel])],
  providers: [MangaResolver, MangaService, MangaLoader],
  exports: [MangaService, MangaResolver],
})
export class MangaModule {}
