import { Module } from '@nestjs/common';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { MangaExtractResolver } from './mangaExtract.resolver';
import { MangaExtractService } from './mangaExtract.service';
import { ChapterExtractModule } from '../chapterExtract/chapterExtract.module';

@Module({
  imports: [PuppeteerConfigModule, ChapterExtractModule],
  providers: [MangaExtractResolver, MangaExtractService],
})
export class MangaExtractModule {}
