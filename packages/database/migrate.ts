import * as dotenv from 'dotenv';

import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { db } from './database';

dotenv.config();

const runMigrate = async () => {
  console.log("⏳ Running migrations...", process.env.DATABASE_URL as string);

  const start = Date.now();

  await migrate(db, { migrationsFolder: './drizzle' });

  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  console.error("❌ Migration failed");
  process.exit(1);
});