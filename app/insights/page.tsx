import { getUserAndWeight } from '@/lib/actions/controller.actions'

const dummyUserId = 1

// eslint-disable-next-line
export default async function Insights() {
  const data = await getUserAndWeight(dummyUserId)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Insights</h1>
        <p>
          Name: {data.firstName} | Username: {data.username} | Email: {data.email} | Height:{' '}
          {data.heightCms}
        </p>
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
            <li>Under {data.weightBands.Normal}</li>
            <li>
              {data.weightBands.Normal}–{data.weightBands.Overweight}
            </li>
            <li>
              {data.weightBands.Overweight}–{data.weightBands.Obese}
            </li>
            <li>Over {data.weightBands.Obese}</li>
          </ul>
          <ul>
            <li className="font-semibold">BMI</li>
            <li>Under 18.5</li>
            <li>18.5-24.9</li>
            <li>25-29.9</li>
            <li>Over 30</li>
          </ul>
        </div>
        <h2>Weight History</h2>
        <ul>
          {data.weightHistory.map((entry) => (
            <li key={entry.date}>
              Date: {entry.date} | Weight: {entry.weightKgs} | BMI: {entry.bmi} | Category:
              {entry.category}
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        &copy; 2024 niamh
      </footer>
    </div>
  )
}
