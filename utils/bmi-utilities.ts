import { bmiCategories } from '../utils/constants'

export function assignBmiLabel(bmi: number): bmiCategories {
  if (bmi < 16) return bmiCategories.SU
  else if (bmi >= 16 && bmi < 17) return bmiCategories.ModU
  else if (bmi >= 17 && bmi < 18.5) return bmiCategories.MildU
  else if (bmi >= 18.5 && bmi < 25) return bmiCategories.Norm
  else if (bmi >= 25 && bmi < 30) return bmiCategories.Over
  else if (bmi >= 30 && bmi < 35) return bmiCategories.OB1
  else if (bmi >= 35 && bmi < 40) return bmiCategories.OB2
  else return bmiCategories.OB3
}
