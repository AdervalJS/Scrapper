import { Args, Query, Resolver, ID } from '@nestjs/graphql';
import { FindAllParams, SearchParams } from './dtos/mangaResponseParams.dto';
import {
  FindAllResponse,
  SearchResponse,
  FindOneResponse,
} from './dtos/mangaResponses';
import { MangaService } from './manga.service';

@Resolver('MangaProfile')
export class MangaResolver {
  constructor(private mangaService: MangaService) {}

  @Query(() => FindOneResponse, { nullable: true })
  async findOne(
    @Args('id', { type: () => ID }) id: number
  ): Promise<FindOneResponse> {
    return await this.mangaService.FindOne(id);
  }

  @Query(() => FindAllResponse)
  async findAll(@Args() args: FindAllParams): Promise<FindAllResponse> {
    return this.mangaService.findAll(args);
  }

  @Query(() => SearchResponse)
  async search(@Args() args: SearchParams) {
    return await this.mangaService.search(args);
  }
}
