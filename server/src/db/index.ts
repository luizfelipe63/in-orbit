import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from './schema'
import { env } from '../env'

export const client = new Client(env.DATABASE_URL)

client.connect()

export const db = drizzle(client, { schema, logger: true })
