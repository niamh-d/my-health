import { UserAndWeight } from '@/types'

export default function WeightHistory({
  userData,
}: {
  userData: UserAndWeight
  // eslint-disable-next-line no-undef
}): React.ReactElement {
  return (
    <>
      <h1>Insights</h1>
      <div>
        Name: {userData.firstName} | Username: {userData.username} | Email: {userData.email} |
        Height: {userData.heightCms}
      </div>
    </>
  )
}
