import { Module } from '@nestjs/common';
import { MangaExtractModule } from './mangaExtract/mangaExtract.module';
import { ChapterModule } from './chapter/chapter.module';
import { PageModule } from './page/page.module';

@Module({
  exports: [MangaExtractModule, ChapterModule, PageModule],
})
export class BackendExtractModule {}
