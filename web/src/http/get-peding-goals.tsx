type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const reponse = await fetch('http://localhost:3333/pending-goals')
  const data = await reponse.json()

  return data.pendingGoals
}
