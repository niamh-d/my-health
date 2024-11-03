export function round(number: number, places: number = 1): number {
  return Number(number.toFixed(places))
}

export function calculateHeightInInches(heightFeet: number, heightInches: number = 0): number {
  return heightFeet * 12 + heightInches
}

export function convertCmsToMeters(heightCms: number): number {
  return heightCms / 100
}
