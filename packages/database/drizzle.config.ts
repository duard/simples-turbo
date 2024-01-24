import * as dotenv from 'dotenv';
import { Config } from 'drizzle-kit';

dotenv.config({
  path: '.env'
});

export default {
  schema: './schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    uri: process.env.DATABASE_URL as string,
  },
  out: './drizzle'
} as Config;
