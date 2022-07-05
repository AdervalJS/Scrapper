import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MangaModel, MangaEntity } from '@scrapper/backend/models';
import {
  MangaExtracted,
  MangaExtractResolver,
} from '@scrapper/backend/extract';
import { FindAndSaveAllGenParams } from './dtos/responseParam.dto';
import { FindAllGenResponse } from './interfaces/response.interface';
import { MangaTools } from '../tools/manga.tools';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(MangaModel)
    private mangaRepository: Repository<MangaEntity>,
    private mangaExtract: MangaExtractResolver,
    private mangaTools: MangaTools
  ) {}

  async databaseIsEmpty(): Promise<boolean> {
    const manga = await this.mangaRepository.findOne();
    return manga ? false : true;
  }

  async save(mangaExtracted: MangaExtracted): Promise<MangaEntity> {
    const mangaInDB = await this.mangaRepository.findOne({
      where: {
        name: mangaExtracted.name,
      },
      relations: ['chapters'],
    });

    return await this.mangaRepository.save(
      mangaInDB
        ? await this.mangaTools.merge(mangaInDB, mangaExtracted)
        : mangaExtracted
    );
  }

  async findAllGen(
    params?: FindAndSaveAllGenParams
  ): Promise<FindAllGenResponse> {
    const mangaExtract = this.mangaExtract;

    async function* extractAndSaveGen() {
      for await (const urls of await mangaExtract.findUrlsGen(
        params?.maxPage
      )) {
        const urlsToSearch = params?.searchOnlyOne ? [urls[0]] : urls;

        for await (const mangaExtracted of await mangaExtract.findMangasGen(
          urlsToSearch
        )) {
          yield mangaExtracted;
        }
      }
    }

    return extractAndSaveGen();
  }
}
