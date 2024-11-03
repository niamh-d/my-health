import { calculateHeightInInches, convertCmsToMeters, round } from './maths-utilities'
import { assignBmiLabel } from './bmi-utilities'
import {
  BmiCalcBodyStats,
  BmiCalculation,
  WeightPerCategoryObject,
  HeightAndOrWeight,
} from '../types'
import { BmiCalcMode } from '../types'

/*
1KG = 2.2046226218 lbs
1lbs = 0.45359237 kg
1st = 14 lbs
1cm = 0.032808398950131 ft
1ft = 12 in
1 ft = 30.48 cm
*/

// constants
const bmiLbsMagicNumber = 703
const lowerLimitBmiNormal = 18.5
const lowerLimitBmiOverweight = 25
const lowerLimitBmiObese = 30

class BMICalculator {
  static instance: BMICalculator
  private defaultErrorMessage = 'Height and weight are required!'
  private mode: BmiCalcMode
  private height: number | undefined
  private weight: number | undefined

  private constructor(mode: BmiCalcMode) {
    this.mode = mode
  }

  private error(keyWord: HeightAndOrWeight = 'both'): void {
    if (keyWord !== 'both') throw new Error(`${keyWord.toUpperCase()} is required!`)

    throw new Error(this.defaultErrorMessage)
  }

  public static getInstance(mode: BmiCalcMode = 'kgs'): BMICalculator {
    if (!BMICalculator.instance) {
      BMICalculator.instance = new BMICalculator(mode)
    }
    return BMICalculator.instance
  }

  private calcBmiKgs(): number {
    return round(this.weight! / this.height! ** 2)
  }

  private calcBmiLbs(): number {
    return round(bmiLbsMagicNumber * (this.weight! / this.height! ** 2))
  }

  private convertBmiToWeightPerHeight(bmi: number, height?: number): number {
    if (!this.height && !height) this.error('height')

    if (this.mode === 'lbs') {
      if (height) this.height = calculateHeightInInches(height!)
      return round(bmi * this.height! ** 2)
    } else {
      if (height) this.height = convertCmsToMeters(height!)
      return round(bmi * this.height! ** 2)
    }
  }

  public calculateWeightPerCategoryPerHeight(height?: number): WeightPerCategoryObject {
    return {
      normal: this.convertBmiToWeightPerHeight(lowerLimitBmiNormal, height),
      overweight: this.convertBmiToWeightPerHeight(lowerLimitBmiOverweight, height),
      obese: this.convertBmiToWeightPerHeight(lowerLimitBmiObese, height),
    }
  }

  public calculateBmi(data: BmiCalcBodyStats): BmiCalculation {
    if (!data.weight) {
      this.error('weight')
    } else this.weight = data.weight

    let bmi: number

    if (data.mode === 'lbs') {
      if (!data.heightFeet) this.error('height')

      this.height = calculateHeightInInches(data.heightFeet!, data.heightInches)
      bmi = this.calcBmiLbs()
    } else {
      if (!data.heightCms) this.error('height')
      this.height = convertCmsToMeters(data.heightCms!)
      bmi = this.calcBmiKgs()
    }

    return {
      bmi,
      category: assignBmiLabel(bmi),
    }
  }
}

export default BMICalculator
