import { WeightPerCategoryObject } from '@/types'

export default function WeightBands({
  weightBands,
}: {
  weightBands: WeightPerCategoryObject
  // eslint-disable-next-line no-undef
}): React.ReactElement {
  return (
    <>
      <h2>BMI</h2>
      <div className="flex gap-3">
        <ul>
          <li className="font-semibold">Category</li>
          <li>Underweight:</li>
          <li>Healthy Weight:</li>
          <li>Overweight:</li>
          <li>Obese:</li>
        </ul>
        <ul>
          <li className="font-semibold">Weight</li>
          <li>Under {weightBands.Normal}</li>
          <li>
            {weightBands.Normal}–{weightBands.Overweight}
          </li>
          <li>
            {weightBands.Overweight}–{weightBands.Obese}
          </li>
          <li>Over {weightBands.Obese}</li>
        </ul>
        <ul>
          <li className="font-semibold">BMI</li>
          <li>Under 18.5</li>
          <li>18.5-24.9</li>
          <li>25-29.9</li>
          <li>Over 30</li>
        </ul>
      </div>
    </>
  )
}
