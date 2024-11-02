import { round } from './basic-utils'

/*
1KG = 2.2046226218 lbs
1lbs = 0.45359237 kg
1st = 14 lbs
1cm = 0.032808398950131 ft
1ft = 12 in
1 ft = 30.48 cm
*/

class BMICalculator {
  static instance: BMICalculator

  public static getInstance(): BMICalculator {
    if (!BMICalculator.instance) {
      BMICalculator.instance = new BMICalculator()
    }
    return BMICalculator.instance
  }

  public calculateBmi(height: number, weight: number): number {
    const heightMeters = height / 100
    const bmi = weight / (heightMeters * heightMeters)
    return round(bmi)
  }
}

export default BMICalculator
