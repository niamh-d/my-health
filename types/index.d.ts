import { BmiCategories, BmiMainCategories } from '../utils/constants'

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
