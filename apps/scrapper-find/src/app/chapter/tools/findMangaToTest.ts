import { createMangaModuleRef } from '../../manga/tools/moduleRef';
import { MangaResolver } from '../../manga/manga.resolver';

export async function findMangaToTest() {
  const mangaModuleRef = await createMangaModuleRef();
  const mangaResolver = await mangaModuleRef.get<MangaResolver>(MangaResolver);
  await mangaResolver.onApplicationBootstrap({
    maxPage: 1,
    searchOnlyOne: true,
  });
  await mangaModuleRef.close();
}
