import { Module } from '@nestjs/common';
import { PageModule } from '../page/page.module';
import { ChapterExtract } from './chapter.resolver';
import { ChapterService } from './chapter.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PageModule, PuppeteerConfigModule],
  exports: [ChapterService, ChapterExtract],
  providers: [ChapterExtract, ChapterService],
})
export class ChapterModule {}
