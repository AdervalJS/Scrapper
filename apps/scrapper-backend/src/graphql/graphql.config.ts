import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

export const GraphqlConfig = (options?: ApolloDriverConfig) =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    ...options,
    driver: ApolloDriver,
    autoSchemaFile: join(__dirname + 'schema.graphql'),
    playground: true,
  });
