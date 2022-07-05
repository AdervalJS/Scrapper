import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaExtractModule } from '@scrapper/backend/extract';
import { MangaModel } from '@scrapper/backend/models';
import { ToolsModule } from '../tools/tools.module';
import { MangaResolver } from './manga.resolver';
import { MangaService } from './manga.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MangaModel]),
    MangaExtractModule,
    ToolsModule,
  ],
  providers: [MangaService, MangaResolver],
  exports: [MangaService, MangaResolver],
})
export class MangaModule {}
