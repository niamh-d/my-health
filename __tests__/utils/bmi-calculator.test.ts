import BMICalculator from '../../utils/bmi-calculator'

describe('BMI Calculator', () => {
  it('should calculate BMI', () => {
    // example values: height: 170 cm, weight: 70 kg
    const bmiCalculator = BMICalculator.getInstance()
    const bmi = bmiCalculator.calculateBmi(170, 70)
    expect(bmi).toBe(24.2)
  })
})
