import { Module } from '@nestjs/common';
import { GraphqlConfig } from '../graphql/graphql.config';

@Module({
  imports: [GraphqlConfig()],
})
export class AppModule {}
