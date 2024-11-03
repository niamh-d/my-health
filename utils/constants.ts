export enum BmiMainCategories {
  Norm = 'Normal',
  Over = 'Overweight',
  Obese = 'Obese',
}

export enum BmiCategories {
  SU = 'Severely Underweight',
  ModU = 'Moderately Underweight',
  MildU = 'Mildly Underweight',
  Norm = BmiMainCategories.Norm,
  Over = BmiMainCategories.Over,
  OB1 = 'Obese - Low Risk',
  OB2 = 'Obese - Moderate Risk',
  OB3 = 'Obese - High Risk',
}

export const lowerLimitBmiNormal = 18.5
export const lowerLimitBmiOverweight = 25
export const lowerLimitBmiObese = 30
export const cmsInAnInch = 2.54
export const poundsInKg = 2.2046226218
export const cmsInAMeter = 100
export const inchesInAFoot = 12

/*
1KG = 2.2046226218 lbs
1lbs = 0.45359237 kg
1st = 14 lbs
1cm = 0.032808398950131 ft
1ft = 12 in
1 in = 2.54 cm
1 ft = 30.48 cm
*/
