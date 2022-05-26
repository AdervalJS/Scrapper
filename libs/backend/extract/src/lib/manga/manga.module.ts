import { Module } from '@nestjs/common';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { MangaResolver } from './manga.resolver';
import { MangaService } from './manga.service';
import { ChapterModule } from '../chapter/chapter.module';

@Module({
  imports: [PuppeteerConfigModule, ChapterModule],
  providers: [MangaResolver, MangaService],
})
export class MangaModule {}
