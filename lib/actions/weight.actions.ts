'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/server'
import { Weight } from '@/server/db/schema'
import { WeightDbObject } from '@/types/db/db-objects'

// returns weight history for one user by Id
export async function getWeight(userId: number): Promise<WeightDbObject[]> {
  const results = await db.select().from(Weight).where(eq(Weight.userId, userId))
  const length = results.length
  if (length === 0) {
    throw new Error('Weight not found')
  }
  return results
}
