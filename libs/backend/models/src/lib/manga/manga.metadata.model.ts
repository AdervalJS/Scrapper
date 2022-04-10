import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
import { BaseManga } from './manga.base.model';

@ObjectType()
@Entity()
export class MangaMetadata extends BaseManga {
  @Field({ nullable: true })
  synopsis?: string;

  @Field({ nullable: true })
  @Column()
  author?: string;

  @Field(() => [String], { nullable: true })
  genres: string[];

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  view: number;

  // @Field()
  // chapters: ChapterBaseProps[];

  @Field(() => [BaseManga], { nullable: true })
  moreAuthor: BaseManga[];

  @Field(() => [BaseManga], { nullable: true })
  relation: BaseManga[];
}
