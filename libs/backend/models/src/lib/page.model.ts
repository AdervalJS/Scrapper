import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ChapterModel } from './chapter.model';

@ObjectType()
@Entity('page')
export class PageModel {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => Int)
  @Column()
  pageNumber: number;

  @Field(() => ChapterModel)
  @ManyToOne(() => ChapterModel, (ChapterModel) => ChapterModel.pages)
  @JoinColumn({ name: 'chapterId' })
  chapter: ChapterModel;
}

export type PageEntity = PageModel;
