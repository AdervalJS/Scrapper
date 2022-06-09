import { Module } from '@nestjs/common';
import { ChapterExtractResolver } from './chapterExtract.resolver';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PuppeteerConfigModule],
  exports: [ChapterServiceExtract, ChapterExtractResolver],
  providers: [ChapterExtractResolver, ChapterServiceExtract],
})
export class ChapterExtractModule {}
