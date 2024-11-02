export type bmiCalcMode = 'kgs' | 'lbs'

export type bmiCalcBodyStats = {
  mode: bmiCalcMode
  heightCms?: number
  heightFeet?: number
  heightInches?: number
  weight: number
}

export type bmiCalculation = {
  bmi: number
  category: bmiCategories
}
