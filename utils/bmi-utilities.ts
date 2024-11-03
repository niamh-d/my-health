import { BmiCategories } from '../utils/constants'

export function assignBmiLabel(bmi: number): BmiCategories {
  if (bmi < 16) return BmiCategories.SU
  else if (bmi >= 16 && bmi < 17) return BmiCategories.ModU
  else if (bmi >= 17 && bmi < 18.5) return BmiCategories.MildU
  else if (bmi >= 18.5 && bmi < 25) return BmiCategories.Norm
  else if (bmi >= 25 && bmi < 30) return BmiCategories.Over
  else if (bmi >= 30 && bmi < 35) return BmiCategories.OB1
  else if (bmi >= 35 && bmi < 40) return BmiCategories.OB2
  else return BmiCategories.OB3
}
