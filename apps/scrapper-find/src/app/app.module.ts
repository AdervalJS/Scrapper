import { Module } from '@nestjs/common';
import { DataBaseConfigs } from '@scrapper/backend/configs';
import { ChapterModule } from './chapter/chapter.module';
import { MangaModule } from './manga/manga.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [DataBaseConfigs(), MangaModule, ChapterModule, TasksModule],
})
export class AppModule {}
