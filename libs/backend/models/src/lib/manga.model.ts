import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { ChapterModel } from './chapter.model';
import { MangaBase } from './manga.base';

@ObjectType()
@Entity('manga')
export class MangaModel extends MangaBase {
  @Field(() => [MangaBase], { nullable: true })
  moreAuthor: MangaBase[];

  @Field(() => [MangaBase], { nullable: true })
  relation: MangaBase[];

  @Column({ type: 'timestamp', nullable: true, default: 'now()' })
  createAt: Date;

  @Column({ type: 'timestamp', nullable: true, default: 'now()' })
  updateAt: Date;

  @Column()
  originUrl: string;

  @OneToMany(() => ChapterModel, (ChapterModels) => ChapterModels.manga, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'mangaId' })
  @Field(() => [ChapterModel], { nullable: true })
  chapters: ChapterModel[];
}

export type MangaEntity = Omit<MangaModel, 'relation' | 'moreAuthor'>;
