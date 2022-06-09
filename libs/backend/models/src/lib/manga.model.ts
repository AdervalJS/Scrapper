import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
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

  // @OneToMany(() => Chapter, (chapters) => chapters.manga, {
  //   cascade: ['insert', 'update'],
  // })
  // @JoinColumn({ name: 'mangaId' })
  // chapters: Chapter[];
}

export type MangaEntity = Omit<MangaModel, 'relation' | 'moreAuthor'>;
