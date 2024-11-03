import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

// eslint-disable-next-line no-undef
const url = process.env.DATABASE_URL as string

export default defineConfig({
  schema: './server/db/schema.ts',
  dialect: 'sqlite',
  out: './drizzle',
  dbCredentials: {
    url,
  },
})
