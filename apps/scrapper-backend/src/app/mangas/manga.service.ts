import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MangaModel, MangaEntity } from '@scrapper/backend/models';
import { FindAllParams, SearchParams } from './dtos/mangaResponseParams.dto';
import {
  FindAllResponse,
  FindOneResponse,
  SearchResponse,
} from './dtos/mangaResponses';
import { MangaLoader } from './manga.loader';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(MangaModel)
    private mangaRepository: Repository<MangaEntity>,
    private mangaLoader: MangaLoader
  ) {}

  private itemToSkip({ page, take }: Pick<FindAllParams, 'page' | 'take'>) {
    return Number(take) * (Number(page) - 1);
  }

  async findAll({
    take,
    page,
    createOrder,
    genres,
    nameOrder,
    updateOrder,
    viewOrder,
  }: FindAllParams): Promise<FindAllResponse> {
    const genresFilter = genres?.map((genre) => `'${genre}'`);
    const [mangas, count] = await this.mangaRepository.findAndCount({
      where: genres ? `genres @> Array[${genresFilter}]` : undefined,
      take: take,
      skip: this.itemToSkip({ page, take }),
      order: {
        view: viewOrder,
        createAt: createOrder,
        updateAt: updateOrder,
        name: nameOrder,
      },
    });

    return {
      data: mangas,
      count,
    };
  }

  async FindOne(id: number): Promise<FindOneResponse> {
    const data = await this.mangaLoader.profilesLoader.load(id);
    return {
      data,
    };
  }

  async search({
    name,
    page,
    take,
    createOrder,
    genres,
    nameOrder,
    updateOrder,
    viewOrder,
  }: SearchParams): Promise<SearchResponse> {
    const searchItems = name.replace(RegExp(' ', 'g'), '&');
    const genresFilter = genres?.map((genre) => `'${genre}'`);
    const searchNameOnly = `to_tsvector(name) @@ to_tsquery('${searchItems}')`;
    const searchNameAndGenres = `to_tsvector(name) @@ to_tsquery('${searchItems}') and genres @> Array[${genresFilter}]`;

    const [mangas, count] = await this.mangaRepository.findAndCount({
      where: genres ? searchNameAndGenres : searchNameOnly,
      skip: this.itemToSkip({ page, take }),
      take: Number(take),
      order: {
        view: viewOrder,
        createAt: createOrder,
        updateAt: updateOrder,
        name: nameOrder,
      },
    });

    return {
      data: mangas,
      count,
    };
  }

  async incrementView(id: number) {
    const manga = await this.mangaRepository.findOne(id);
    return this.mangaRepository.save({
      ...manga,
      view: manga.view++,
    });
  }

  // async findByChapterId(id: number): Promise<BaseManga> {
  //   return await this.MangaLoader.mangaByChapterIdLoader.load(id);
  // }
}
