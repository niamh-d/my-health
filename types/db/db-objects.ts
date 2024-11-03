export type UserDbObject = {
  userId: number
  firstName: string
  username: string
  email: string
  heightCms: number | null
}

export type WeightDbObject = {
  userId: number
  weightKgs: number
  date: string
}
