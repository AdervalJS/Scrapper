import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MangaEntity, MangaModel, MangaBase } from '@scrapper/backend/models';
@Injectable()
export class MangaLoader {
  constructor(
    @InjectRepository(MangaModel)
    private mangaRepository: Repository<MangaEntity>
  ) {}

  //   private batchMangaByChapterId = async (ids: number[]) => {
  //     const chaptersIdMap: { [chapterId: number]: MangaModel } = {};

  //     await Promise.all(
  //       ids.map(async (id) => {
  //         const manga = await this.mangaRepository.createQueryBuilder('manga')
  //           .leftJoinAndSelect('manga.chapters', 'chapters')
  //           .where('chapters.id = :id', { id })
  //           .getOne();

  //         chaptersIdMap[id] = manga;
  //       })
  //     );

  //     return ids.map((chapterId) => chaptersIdMap[chapterId]);
  //   };

  private batchMangas = async (ids: number[]) => {
    const mangas = await this.mangaRepository.findByIds(ids);
    const mangasIdMap: { [mangaId: number]: MangaBase } = {};

    mangas.forEach((manga) => {
      mangasIdMap[manga.id] = manga;
    });

    return ids.map((mangaId) => mangasIdMap[mangaId]);
  };

  private batchMangaProfiles = async (ids: number[]) => {
    const mangas = await this.mangaRepository.findByIds(ids);
    const mangasIdMap: { [mangaId: number]: MangaModel } = {};

    await Promise.all(
      mangas.map(async (manga) => {
        const filterStings = [];

        manga.genres.forEach((genre, index, genres) => {
          if (genres.length === 1) {
            filterStings.push(`'${genre}'`);
          } else if (Math.abs(genres.length / 2) <= index) {
            filterStings.push(`'${genre}'`);
          }
        });

        const relation = await this.mangaRepository.find({
          where: `genres @> Array[${filterStings}]`,
          select: [
            'id',
            'image',
            'name',
            'genres',
            'author',
            'synopsis',
            'view',
          ],
          take: 20,
        });

        const moreAuthor = await this.mangaRepository.find({
          where: { author: manga.author },
          select: [
            'id',
            'image',
            'name',
            'genres',
            'author',
            'synopsis',
            'view',
          ],
          take: 20,
        });

        return (mangasIdMap[manga.id] = {
          ...manga,
          relation,
          moreAuthor,
        });
      })
    );

    return ids.map((mangaId) => mangasIdMap[mangaId]);
  };

  mangasLoader = new DataLoader(this.batchMangas);
  //   mangaByChapterIdLoader = new DataLoader(this.batchMangaByChapterId);
  profilesLoader = new DataLoader(this.batchMangaProfiles);
}
