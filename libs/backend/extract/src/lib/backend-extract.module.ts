import { Module } from '@nestjs/common';
import { MangaModule } from './manga/manga.module';
import { ChapterModule } from './chapter/chapter.module';
import { PageModule } from './page/page.module';

@Module({
  exports: [MangaModule, ChapterModule, PageModule],
})
export class BackendExtractModule {}
