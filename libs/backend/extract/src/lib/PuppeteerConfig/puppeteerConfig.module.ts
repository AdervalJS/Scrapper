import { Module } from '@nestjs/common';
import { PuppeteerConfig } from './puppeteerConfig.conf';

@Module({
  providers: [PuppeteerConfig],
  exports: [PuppeteerConfig],
})
export class PuppeteerConfigModule {}
