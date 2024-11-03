import BMICalculator from '@/utils/bmi-calculator'

const dataKgs = {
  heightCms: 170,
  weight: 70,
}
const limitsKgs = {
  Normal: 53.5,
  Overweight: 72.2,
  Obese: 86.7,
}

const dataLbs = {
  heightFeet: 5,
  heightInches: 3,
  weight: 130,
}
const limitsLbs = {
  Normal: 47.4,
  Overweight: 64,
  Obese: 76.8,
}

describe('BMI Calculator Class', () => {
  let calculator: BMICalculator

  afterEach(() => {
    calculator.closeInstance()
  })

  describe('calculateBmi method', () => {
    it('should calculate BMI using metric values', () => {
      calculator = BMICalculator.getInstance()
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
      calculator = BMICalculator.getInstance()
      // example value: height: 170 cm
      const actual = calculator.calculateWeightPerCategoryPerHeight(dataKgs.heightCms!)

      expect(actual).toEqual(limitsKgs)
    })
    it('should calculate correct weight per major BMI categories for imperials values', () => {
      calculator = BMICalculator.getInstance('lbs')
      // example values: height: 5 ft 3 in (= 63in)
      const actual = calculator.calculateWeightPerCategoryPerHeight(
        dataLbs.heightFeet,
        dataLbs.heightInches,
      )

      expect(actual).toEqual(limitsLbs)
    })
  })
})
