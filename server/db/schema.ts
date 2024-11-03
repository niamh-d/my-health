import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core'

export const Users = sqliteTable('user', {
  userId: integer('id', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  name: text('name').notNull(),
  username: text('name').notNull().unique(),
  email: text('email').notNull().unique(),
})

export const Weight = sqliteTable('weight', {
  userId: integer('id').notNull(),
  weight: real('weight').notNull(),
  date: text('date').notNull(),
})

export const userRelations = relations(Users, ({ many }) => ({
  weight: many(Weight),
}))

export const weightRelations = relations(Weight, ({ one, many }) => ({
  user: one(Users, {
    fields: [Weight.userId],
    references: [Users.userId],
  }),
}))
