import { Module } from '@nestjs/common';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { MangaExtract } from './manga.resolver';
import { MangaService } from './manga.service';
import { ChapterModule } from '../chapter/chapter.module';

@Module({
  imports: [PuppeteerConfigModule, ChapterModule],
  providers: [MangaExtract, MangaService],
})
export class MangaModule {}
