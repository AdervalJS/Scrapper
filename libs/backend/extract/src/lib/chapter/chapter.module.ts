import { Module } from '@nestjs/common';
import { PageModule } from '../page/page.module';
import { ChapterResolver } from './chapter.resolver';
import { ChapterService } from './chapter.service';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';

@Module({
  imports: [PageModule, PuppeteerConfigModule],
  exports: [ChapterService, ChapterResolver],
  providers: [ChapterResolver, ChapterService],
})
export class ChapterModule {}
