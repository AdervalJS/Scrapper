import { Module } from '@nestjs/common';
import { PageResolverExtract } from './pageExtract.resolver';
import { PuppeteerConfigModule } from '../PuppeteerConfig/puppeteerConfig.module';
import { PageServiceExtract } from './pageExtract.service';

@Module({
  imports: [PuppeteerConfigModule],
  exports: [PageResolverExtract, PageServiceExtract],
  providers: [PageResolverExtract, PageServiceExtract],
})
export class PageExtractModule {}
