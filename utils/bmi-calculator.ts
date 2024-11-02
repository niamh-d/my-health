import { round } from './maths-utilities'
import { assignBmiLabel } from './bmi-utilities'
import { bmiCalcBodyStats, bmiCalculation } from '../types'

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
const inchesInFeet = 12

class BMICalculator {
  static instance: BMICalculator
  private errorMessage = 'Height and weight are required!'

  private error(): void {
    throw new Error(this.errorMessage)
  }

  public static getInstance(): BMICalculator {
    if (!BMICalculator.instance) {
      BMICalculator.instance = new BMICalculator()
    }
    return BMICalculator.instance
  }
  private calcBmiKgs(data: bmiCalcBodyStats): number {
    const { heightCms, weight } = data
    const heightMeters = heightCms! / 100
    const bmi = weight / (heightMeters * heightMeters)
    return round(bmi)
  }

  private calcBmiLbs(data: bmiCalcBodyStats): number {
    const { heightFeet, heightInches, weight } = data
    const height = heightFeet! * inchesInFeet + heightInches!
    const bmi = bmiLbsMagicNumber * (weight / (height * height))
    return round(bmi)
  }

  public calculateBmi(data: bmiCalcBodyStats): bmiCalculation {
    let bmi: number

    if (data.mode === 'lbs') {
      if (!data.heightFeet && !data.heightInches) {
        this.error()
      }
      bmi = this.calcBmiLbs(data)
    } else {
      if (!data.heightCms || !data.weight) {
        this.error()
      }
      bmi = this.calcBmiKgs(data)
    }
    return {
      bmi,
      category: assignBmiLabel(bmi),
    }
  }
}

export default BMICalculator
