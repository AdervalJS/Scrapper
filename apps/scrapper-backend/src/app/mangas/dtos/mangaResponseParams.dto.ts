import { ArgsType, Field, Int } from '@nestjs/graphql';

export type Order = 'DESC' | 'ASC';

@ArgsType()
export class FindAllParams {
  @Field(() => Int)
  take: number;

  @Field(() => Int)
  page: number;

  @Field(() => [String], { nullable: true })
  genres?: Array<string>;

  @Field(() => String, {
    nullable: true,
    description: 'only the DESC or ASC value',
  })
  nameOrder?: Order;

  @Field(() => String, {
    nullable: true,
    description: 'only the DESC or ASC value',
  })
  viewOrder?: Order;

  @Field(() => String, {
    nullable: true,
    description: 'only the DESC or ASC value',
  })
  updateOrder?: Order;

  @Field(() => String, {
    nullable: true,
    description: 'only the DESC or ASC value',
  })
  createOrder?: Order;
}

@ArgsType()
export class SearchParams extends FindAllParams {
  @Field(() => String)
  name: string;
}
