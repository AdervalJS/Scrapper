import { Module } from '@nestjs/common';
import { GraphqlConfig, DataBaseConfigs } from '@scrapper/backend/configs';
import { MangaModule } from './mangas/manga.module';

@Module({
  imports: [GraphqlConfig(), MangaModule, DataBaseConfigs()],
})
export class AppModule {}
