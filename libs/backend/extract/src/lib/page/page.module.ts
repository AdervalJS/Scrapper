import { Module } from '@nestjs/common';
import { PageResolver } from './page.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageService } from './page.service';

@Module({
  imports: [PuppeteerConfigModule],
  exports: [PageResolver, PageService],
  providers: [PageResolver, PageService],
})
export class PageModule {}
