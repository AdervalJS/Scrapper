import { Module } from '@nestjs/common';
import { MangaExtractModule } from './mangaExtract/mangaExtract.module';
import { ChapterExtractModule } from './chapterExtract/chapterExtract.module';
import { PageModule } from './page/page.module';

@Module({
  exports: [MangaExtractModule, ChapterExtractModule, PageModule],
})
export class BackendExtractModule {}
