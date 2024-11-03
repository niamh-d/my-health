'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/server'
import { Users } from '@/server/db/schema'
import { UserDbObject } from '@/types/db/db-objects'

export async function getUser(userId: number): Promise<UserDbObject> {
  const results = await db.select().from(Users).where(eq(Users.userId, userId))
  const user = results[0]
  if (!user) {
    throw new Error('User not found')
  }
  return user
}
