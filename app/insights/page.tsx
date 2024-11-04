import { getUserAndWeight } from '@/lib/actions/controller.actions'
import WeightBands from '../_components/weight-bands'

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
        <WeightBands weightBands={data.weightBands} />

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
