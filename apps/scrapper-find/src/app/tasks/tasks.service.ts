import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MangaResolver } from '../manga/manga.resolver';

@Injectable()
export class TasksService {
  constructor(private mangaResolver: MangaResolver) {}

  @Cron('0 10 * * * *')
  async updateMangas() {
    const mangaGe = await this.mangaResolver.findAndSaveAllGen();

    for await (const manga of mangaGe) {
      console.timeLog(`O manga id=${manga?.id} foi atualizado`);
    }

    console.clear();
  }
}
