import { Module } from '@nestjs/common';
import { MangaExtractModule } from './mangaExtract/mangaExtract.module';
import { ChapterExtractModule } from './chapterExtract/chapterExtract.module';
import { PageExtractModule } from './pageExtract/pageExtract.module';

@Module({
  exports: [MangaExtractModule, ChapterExtractModule, PageExtractModule],
})
export class BackendExtractModule {}
