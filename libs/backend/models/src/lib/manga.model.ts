import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { ChapterModel } from './chapter.model';
import { MangaBase } from './manga.base';

@ObjectType()
@Entity('manga')
export class MangaModel extends MangaBase {
  @Field(() => [MangaBase], { nullable: true })
  moreAuthor: MangaBase[];

  @Field(() => [MangaBase], { nullable: true })
  relation: MangaBase[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column()
  originUrl: string;

  @Field(() => [ChapterModel], { nullable: true })
  @OneToMany(() => ChapterModel, (ChapterModels) => ChapterModels.manga, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'mangaId' })
  chapters: ChapterModel[];
}

export type MangaEntity = Omit<MangaModel, 'relation' | 'moreAuthor'>;
