import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MangaModule } from '../manga/manga.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [MangaModule, ScheduleModule.forRoot()],
  providers: [TasksService],
})
export class TasksModule {}
