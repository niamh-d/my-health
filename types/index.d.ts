import { BmiCategories, BmiMainCategories } from '../utils/constants'
import { UserDbObject } from './db/db-objects'

export type BmiCalcMode = 'kgs' | 'lbs'
export type HeightAndOrWeight = 'height' | 'weight' | 'both'

export type BmiCalcBodyStats = {
  heightCms?: number
  heightFeet?: number
  heightInches?: number
  weight?: number
}

export type BmiCalculation = {
  bmi: number
  category: BmiCategories
}

export type WeightPerCategoryObject = {
  [key in BmiMainCategories]: number
}

type WeightObject = {
  bmi: number
  category: BmiCategories
  date: string
  weightKgs: number
}

export type UserAndWeight = UserDbObject & {
  weightHistory: WeightObject[]
  weightBands: WeightPerCategoryObject
}
