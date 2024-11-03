import {
  calculateHeightInInches,
  convertCmsToMeters,
  convertInchesToCms,
  convertPoundsToKgs,
  round,
  square,
} from './maths-utilities'
import { assignBmiLabel } from './bmi-utilities'
import {
  BmiCalcBodyStats,
  BmiCalculation,
  WeightPerCategoryObject,
  HeightAndOrWeight,
} from '../types'
import { BmiCalcMode } from '../types'
import {
  lowerLimitBmiNormal,
  lowerLimitBmiOverweight,
  lowerLimitBmiObese,
} from '../utils/constants'

class BMICalculator {
  static instance: BMICalculator | undefined
  private defaultErrorMessage = 'Height and weight are required!'
  private mode: BmiCalcMode
  private heightMeters: number | undefined
  private weightKgs: number | undefined

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

  public closeInstance(): void {
    BMICalculator.instance = undefined
  }

  private bmiCalc(): number {
    return round(this.weightKgs! / square(this.heightMeters!))
  }

  private convertHeightToMetric(data: BmiCalcBodyStats): number {
    return convertCmsToMeters(
      convertInchesToCms(calculateHeightInInches(data.heightFeet!, data.heightInches)),
    )
  }

  private convertWeightToMetric(weight: number): number {
    return convertPoundsToKgs(weight)
  }

  private setHeight(height: number): void {
    this.heightMeters = height
  }

  private setWeight(weight: number): void {
    this.weightKgs = weight
  }

  private setHeightAndWeight(data: BmiCalcBodyStats): void {
    if (this.mode === 'lbs') {
      this.setHeight(this.convertHeightToMetric(data))
      this.setWeight(this.convertWeightToMetric(data.weight!))
    } else {
      this.setHeight(convertCmsToMeters(data.heightCms!))
      this.setWeight(data.weight!)
    }
  }

  private validateDataObject(data: BmiCalcBodyStats): void {
    if (!data.weight || (!data.heightCms && !data.heightFeet)) this.error()
  }

  public calculateBmi(data: BmiCalcBodyStats): BmiCalculation {
    this.validateDataObject(data)
    this.setHeightAndWeight(data)

    const bmi = this.bmiCalc()

    return {
      bmi,
      category: assignBmiLabel(bmi),
    }
  }

  private convertBmiToWeightPerHeight(
    bmi: number,
    heightValueOne?: number,
    heightValueTwo?: number,
  ): number {
    if (!this.heightMeters && !heightValueOne) this.error('height')

    if (heightValueOne) {
      if (this.mode === 'lbs') {
        this.setHeight(
          this.convertHeightToMetric({
            heightFeet: heightValueOne!,
            heightInches: heightValueTwo,
          }),
        )
      } else {
        this.setHeight(convertCmsToMeters(heightValueOne))
      }
    }
    return round(bmi * square(this.heightMeters!))
  }

  public calculateWeightPerCategoryPerHeight(
    heightValueOne?: number,
    heightValueTwo?: number,
  ): WeightPerCategoryObject {
    return {
      Normal: this.convertBmiToWeightPerHeight(lowerLimitBmiNormal, heightValueOne, heightValueTwo),
      Overweight: this.convertBmiToWeightPerHeight(
        lowerLimitBmiOverweight,
        heightValueOne,
        heightValueTwo,
      ),
      Obese: this.convertBmiToWeightPerHeight(lowerLimitBmiObese, heightValueOne, heightValueTwo),
    }
  }
}

export default BMICalculator
