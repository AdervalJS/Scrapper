import { Field, ObjectType } from '@nestjs/graphql';
import { MangaBase, MangaModel } from '@scrapper/backend/models';

@ObjectType()
export class FindAllResponse {
  @Field(() => [MangaBase], { nullable: true, defaultValue: [] })
  data: MangaBase[];

  @Field({ defaultValue: 0 })
  count: number;
}

@ObjectType()
export class SearchResponse {
  @Field(() => [MangaBase], { nullable: true, defaultValue: [] })
  data: MangaBase[];

  @Field({ defaultValue: 0 })
  count: number;
}

@ObjectType()
export class FindOneResponse {
  @Field(() => MangaModel, { nullable: true })
  data: MangaModel;
}
