import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core'

export const Users = sqliteTable('users', {
  userId: integer('user_id', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  firstName: text('first_name').notNull(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  heightCms: real('height_cms'),
})

export const Weight = sqliteTable('weight', {
  userId: integer('user_id').notNull(),
  weightKgs: real('weight_kgs').notNull(),
  date: text('date').notNull(),
})

export const userRelations = relations(Users, ({ many }) => ({
  weight: many(Weight),
}))

export const weightRelations = relations(Weight, ({ one }) => ({
  user: one(Users, {
    fields: [Weight.userId],
    references: [Users.userId],
  }),
}))
