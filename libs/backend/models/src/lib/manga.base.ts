import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class MangaBase {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  image: string;

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
  @Column({ default: 0, nullable: true })
  view?: number;
}
