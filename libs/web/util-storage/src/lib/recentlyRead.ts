export interface MangaReadProp {
  id: number;
  name: string;
  image: string;
  chapterId: number;
}

export function getRecentlyReads(): MangaReadProp[] {
  const recentlyReadInStorage = localStorage.getItem('@recentlyRead');

  if (!recentlyReadInStorage) {
    return [];
  }

  return JSON.parse(recentlyReadInStorage);
}

export function setRecentlyRead(manga: MangaReadProp): MangaReadProp[] {
  const recentlyReadInStorage = getRecentlyReads();

  let newData = [];

  if (!recentlyReadInStorage[0]) {
    newData.push(manga);
  } else {
    const removeRecentlyRead = recentlyReadInStorage.filter(
      (item) => Number(item.id) !== Number(manga.id)
    );

    newData = [manga, ...removeRecentlyRead];
  }

  localStorage.setItem('@recentlyRead', JSON.stringify(newData));

  return newData;
}

export function removeRecentlyRead(id: number): MangaReadProp[] {
  const recentlyReadInStorage = getRecentlyReads();

  let newData = [] as Array<MangaReadProp>;

  if (recentlyReadInStorage[0]) {
    const removeRecentlyRead = recentlyReadInStorage.filter(
      (item) => Number(item.id) !== Number(id)
    );

    newData = [...removeRecentlyRead];
  }

  localStorage.setItem('@recentlyRead', JSON.stringify(newData));

  return newData;
}
