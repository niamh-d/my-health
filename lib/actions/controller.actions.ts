import { UserAndWeight } from '@/types'
import BMICalculator from '@/utils/bmi-calculator'
import { getUser } from './users.actions'
import { getWeight } from './weight.actions'

export async function getUserAndWeight(userId: number): Promise<UserAndWeight> {
  const user = await getUser(userId)
  const weightArray = await getWeight(userId)
  const calculator = BMICalculator.getInstance()
  const weightHistory = weightArray.map((weight) => {
    return {
      date: weight.date,
      weightKgs: weight.weightKgs,
      ...calculator.calculateBmi({
        weight: weight.weightKgs,
        heightCms: user.heightCms!,
      }),
    }
  })
  return { ...user, weightHistory }
}
