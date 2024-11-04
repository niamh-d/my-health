import { WeightObject } from '@/types'

export default function WeightHistory({
  weightHistory,
}: {
  weightHistory: WeightObject[]
  // eslint-disable-next-line no-undef
}): React.ReactElement {
  return (
    <>
      <h2>Weight History</h2>
      <ul>
        {weightHistory.map((entry) => (
          <li key={entry.date}>
            Date: {entry.date} | Weight: {entry.weightKgs} | BMI: {entry.bmi} | Category:
            {entry.category}
          </li>
        ))}
      </ul>
    </>
  )
}
