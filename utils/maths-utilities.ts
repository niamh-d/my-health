import { cmsInAnInch, poundsInKg, cmsInAMeter, inchesInAFoot } from '../utils/constants'

export function round(number: number, places: number = 1): number {
  return Number(number.toFixed(places))
}

export function calculateHeightInInches(heightFeet: number, heightInches: number = 0): number {
  return heightFeet * inchesInAFoot + heightInches
}

export function convertCmsToMeters(heightCms: number): number {
  return heightCms / cmsInAMeter
}

export function convertInchesToCms(heightInches: number): number {
  return heightInches * cmsInAnInch
}

export function convertPoundsToKgs(weightPounds: number): number {
  return weightPounds / poundsInKg
}

export function square(number: number): number {
  return exponent(number, 2)
}

function exponent(base: number, power: number): number {
  return Math.pow(base, power)
}
