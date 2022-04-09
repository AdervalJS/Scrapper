import { Module } from '@nestjs/common';
import { PageExtract } from './page.extract';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageService } from './page.service';

@Module({
  imports: [PuppeteerConfigModule],
  exports: [PageExtract, PageService],
  providers: [PageExtract, PageService],
})
export class PageModule {}
