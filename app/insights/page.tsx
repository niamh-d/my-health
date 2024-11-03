import { getUser } from '@/lib/actions/users.actions'
import { getWeight } from '@/lib/actions/weight.actions'
import { WeightDbObject } from '@/types/db/db-objects'
import BMICalculator from '@/utils/bmi-calculator'

// eslint-disable-next-line
export default async function Insights() {
  const dummyUserId = 1
  const user = await getUser(dummyUserId)
  const weightArray = (await getWeight(dummyUserId)) as WeightDbObject[]
  const calculator = BMICalculator.getInstance()
  const userWeightDataArr = weightArray.map((weight) => {
    return {
      date: weight.date,
      weightKgs: weight.weightKgs,
      bmi: calculator.calculateBmi({
        mode: 'kgs',
        weight: weight.weightKgs,
        heightCms: user.heightCms!,
      }),
    }
  })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Insights</h1>
        <p>
          Name: {user.firstName} | Username: {user.username} | Email: {user.email} | Height:{' '}
          {user.heightCms}
        </p>
        <h2>BMI</h2>
        <ul>
          {userWeightDataArr.map((entry) => (
            <li key={entry.date}>
              Date: {entry.date} | Weight: {entry.weightKgs} | BMI: {entry.bmi.bmi} | Category:
              {entry.bmi.category}
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
