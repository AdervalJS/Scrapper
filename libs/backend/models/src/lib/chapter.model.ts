import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { PageModel } from './page.model';

import { MangaModel } from './manga.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('chapter')
export class ChapterModel {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Column()
  originUrl: string;

  @Field(() => Int)
  @Column()
  chapterNumber: number;

  @Field(() => MangaModel)
  @ManyToOne(() => MangaModel, (MangaModel) => MangaModel.chapters, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'mangaId' })
  manga: MangaModel;

  @Field(() => [PageModel], { nullable: true })
  @OneToMany(() => PageModel, (PageModel) => PageModel.chapter, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'chapterId' })
  pages: PageModel[];
}

export type ChapterEntity = ChapterModel;
