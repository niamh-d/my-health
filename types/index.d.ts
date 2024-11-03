import { BmiCategories } from '../utils/bmi-utilities'

export type BmiCalcMode = 'kgs' | 'lbs'
export type HeightAndOrWeight = 'height' | 'weight' | 'both'

export type BmiCalcBodyStats = {
  mode: BmiCalcMode
  heightCms?: number
  heightFeet?: number
  heightInches?: number
  weight: number
}

export type BmiCalculation = {
  bmi: number
  category: BmiCategories
}

export type WeightPerCategoryObject = {
  [key in BmiCategories]: number
}
