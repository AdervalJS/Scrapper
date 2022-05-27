import { Module } from '@nestjs/common';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { MangaExtractResolver } from './mangaExtract.resolver';
import { MangaExtractService } from './mangaExtract.service';
import { ChapterModule } from '../chapter/chapter.module';

@Module({
  imports: [PuppeteerConfigModule, ChapterModule],
  providers: [MangaExtractResolver, MangaExtractService],
})
export class MangaExtractModule {}
