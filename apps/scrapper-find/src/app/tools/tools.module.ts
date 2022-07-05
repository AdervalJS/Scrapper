import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterModel, MangaModel, PageModel } from '@scrapper/backend/models';
import { ChapterTools } from './chapter.tools';
import { MangaTools } from './manga.tools';
import { PageTools } from './page.tools';

@Module({
  imports: [TypeOrmModule.forFeature([MangaModel, ChapterModel, PageModel])],
  providers: [MangaTools, ChapterTools, PageTools],
  exports: [MangaTools, ChapterTools, PageTools],
})
export class ToolsModule {}
