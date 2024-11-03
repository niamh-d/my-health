import BMICalculator from '../../utils/bmi-calculator'
import { BmiCategories } from '../../types'

const dataKgs: BmiCategories = {
  mode: 'kgs',
  heightCms: 170,
  weight: 70,
}

const dataLbs: BmiCategories = {
  mode: 'lbs',
  heightFeet: 5,
  heightInches: 3,
  weight: 130,
}

describe('BMI Calculator Class', () => {
  let calculator: BMICalculator

  beforeEach(() => {
    calculator = BMICalculator.getInstance()
  })

  describe('calculateBmi method', () => {
    it('should calculate BMI using metric values', () => {
      // example values: height: 170 cm, weight: 70 kg
      const { bmi, category } = calculator.calculateBmi(dataKgs)
      expect(bmi).toBe(24.2)
      expect(category).toBe('Normal')
    })
    it('should calculate BMI using imperial values', () => {
      // example values: height: 5 ft 3 in (= 63in), weight: 130 lbs
      calculator = BMICalculator.getInstance('lbs')
      const { bmi, category } = calculator.calculateBmi(dataLbs)
      expect(bmi).toBe(23)
      expect(category).toBe('Normal')
    })
  })

  describe('calculateWeightPerCategoryPerHeight method', () => {
    it('should calculate correct weight per major BMI categories for metric values', () => {
      // example value: height: 170 cm
      const actual = calculator.calculateWeightPerCategoryPerHeight(dataKgs.heightCms!)

      const expected = {
        normal: 53.5,
        overweight: 72.2,
        obese: 86.7,
      }

      expect(actual).toEqual(expected)
    })
  })
})
