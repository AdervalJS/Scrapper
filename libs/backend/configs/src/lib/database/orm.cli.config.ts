import * as path from 'path';
import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';

config();

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  username: 'scrapper',
  password: 'scrapper3859',
  database: 'scrapper',
  port: 5432,
  entities: [
    path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'models',
      'src',
      'lib',
      '*.model{.ts,.js}'
    ),
  ],
  migrations: [path.resolve(__dirname, 'migrations', '*')],
  cli: {
    migrationsDir: './libs/backend/configs/src/lib/database/migrations',
    entitiesDir: './libs/backend/models/src/lib',
  },
};

export default ormConfig;
