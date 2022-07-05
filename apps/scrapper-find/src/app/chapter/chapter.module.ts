import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageExtractModule } from '@scrapper/backend/extract';
import { ChapterModel } from '@scrapper/backend/models';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterModel]), PageExtractModule],
  providers: [ChapterService],
  controllers: [ChapterController],
})
export class ChapterModule {}
