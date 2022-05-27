import { Module } from '@nestjs/common';
import { PageExtractModule } from '../pageExtract/pageExtract.module';
import { ChapterResolverExtract } from './chapterExtract.resolver';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PageExtractModule, PuppeteerConfigModule],
  exports: [ChapterServiceExtract, ChapterResolverExtract],
  providers: [ChapterResolverExtract, ChapterServiceExtract],
})
export class ChapterExtractModule {}
