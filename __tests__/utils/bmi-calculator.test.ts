import BMICalculator from '../../utils/bmi-calculator'
import { bmiCalcBodyStats } from '../../types'

const dataKgs: bmiCalcBodyStats = {
  mode: 'kgs',
  heightCms: 170,
  weight: 70,
}

const dataLbs: bmiCalcBodyStats = {
  mode: 'lbs',
  heightFeet: 5,
  heightInches: 3,
  weight: 130,
}

describe('BMI Calculator', () => {
  let calculator: BMICalculator

  beforeEach(() => {
    calculator = BMICalculator.getInstance()
  })

  it('should calculate BMI using metric values', () => {
    // example values: height: 170 cm, weight: 70 kg
    const bmi = calculator.calculateBmi(dataKgs)
    expect(bmi).toBe(24.2)
  })
  it('should calculate BMI using imperial values', () => {
    // example values: height: 5 ft 3 in (= 63in), weight: 130 lbs
    const bmi = calculator.calculateBmi(dataLbs)
    expect(bmi).toBe(23)
  })
})
