import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
import { BaseManga } from './manga.base';

@ObjectType()
@Entity('manga')
export class MangaModel extends BaseManga {
  @Field({ nullable: true })
  @Column()
  synopsis?: string;

  @Field({ nullable: true })
  @Column()
  author?: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, default: {} })
  genres: string[];

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  view: number;

  @Field(() => [BaseManga], { nullable: true })
  moreAuthor: BaseManga[];

  @Field(() => [BaseManga], { nullable: true })
  relation: BaseManga[];

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
