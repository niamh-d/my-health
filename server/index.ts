import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './db/schema'

// eslint-disable-next-line no-undef
const url = process.env.DATABASE_URL as string

const client = createClient({ url })

export const db = drizzle(client, { schema })
