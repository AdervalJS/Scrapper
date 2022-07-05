import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfigs } from '@scrapper/backend/configs';
import { MangaExtractModule } from '@scrapper/backend/extract';
import { ChapterModel, MangaModel } from '@scrapper/backend/models';
import { ToolsModule } from '../../tools/tools.module';
import { MangaResolver } from '../manga.resolver';
import { MangaService } from '../manga.service';

export async function createMangaModuleRef() {
  const moduleRef = await Test.createTestingModule({
    imports: [
      DataBaseConfigs(),
      TypeOrmModule.forFeature([MangaModel, ChapterModel]),
      MangaExtractModule,
      ToolsModule,
    ],
    providers: [MangaService, MangaResolver],
  }).compile();

  return moduleRef;
}
