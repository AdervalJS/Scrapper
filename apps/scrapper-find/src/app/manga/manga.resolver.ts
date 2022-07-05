import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { FindAndSaveAllGenParams } from './dtos/responseParam.dto';
import { FindAndSaveAllGen } from './interfaces/response.interface';
import { MangaService } from './manga.service';

@Injectable()
export class MangaResolver implements OnApplicationBootstrap {
  constructor(private mangaService: MangaService) {}

  async onApplicationBootstrap(args?: FindAndSaveAllGenParams) {
    if (await this.mangaService.databaseIsEmpty()) {
      for await (const {
        id,
        name,
        image,
        chapters,
      } of await this.findAndSaveAllGen(args)) {
        console.table({
          id,
          name,
          image,
          chapters: chapters.length,
        });
      }

      console.clear();
    }
  }

  async findAndSaveAllGen(
    args?: FindAndSaveAllGenParams
  ): Promise<FindAndSaveAllGen> {
    const mangaService = this.mangaService;

    async function* findAndSaveAllGen() {
      for await (const mangaExtracted of await mangaService.findAllGen(args)) {
        const manga = await mangaService.save(mangaExtracted);
        yield manga;
      }
    }

    return findAndSaveAllGen();
  }
}
