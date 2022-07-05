import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfigs } from '@scrapper/backend/configs';
import { PageExtractModule } from '@scrapper/backend/extract';
import { ChapterModel } from '@scrapper/backend/models';
import { ChapterController } from '../chapter.controller';
import { ChapterService } from '../chapter.service';

export async function createChapterModuleRef() {
  const moduleRef = await Test.createTestingModule({
    imports: [
      DataBaseConfigs(),
      TypeOrmModule.forFeature([ChapterModel]),
      PageExtractModule,
    ],
    providers: [ChapterService],
    controllers: [ChapterController],
  }).compile();

  return moduleRef;
}
