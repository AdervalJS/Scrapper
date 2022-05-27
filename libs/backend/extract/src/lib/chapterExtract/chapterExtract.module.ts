import { Module } from '@nestjs/common';
import { ChapterResolverExtract } from './chapterExtract.resolver';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PuppeteerConfigModule],
  exports: [ChapterServiceExtract, ChapterResolverExtract],
  providers: [ChapterResolverExtract, ChapterServiceExtract],
})
export class ChapterExtractModule {}
