import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MangaEntity, MangaModel } from '@scrapper/backend/models';
import { DeepPartial, Repository } from 'typeorm';
import { ChapterTools } from './chapter.tools';

@Injectable()
export class MangaTools {
  constructor(
    @InjectRepository(MangaModel)
    private mangaRepository: Repository<MangaEntity>,
    private chapterTools: ChapterTools
  ) {}

  merge(mangaInDB: MangaEntity, newManga: DeepPartial<MangaEntity>) {
    const mangaMerged = this.mangaRepository.merge(mangaInDB, newManga);
    const chaptersMerged = this.chapterTools.merge(
      mangaInDB.chapters,
      newManga.chapters
    );

    const merge: MangaEntity = {
      ...mangaMerged,
      chapters: chaptersMerged,
    };

    return merge;
  }
}
