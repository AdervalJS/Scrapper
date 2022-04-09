export type Chapters = {
  name: string;
  chapterNumber: number;
  originUrl: string;
}[];

export type FindChapters = Promise<Chapters>;
