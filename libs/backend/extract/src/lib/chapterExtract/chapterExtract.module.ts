import { Module } from '@nestjs/common';
import { PageModule } from '../page/page.module';
import { ChapterResolverExtract } from './chapterExtract.resolver';
import { ChapterServiceExtract } from './chapterExtract.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PageModule, PuppeteerConfigModule],
  exports: [ChapterServiceExtract, ChapterResolverExtract],
  providers: [ChapterResolverExtract, ChapterServiceExtract],
})
export class ChapterExtractModule {}
