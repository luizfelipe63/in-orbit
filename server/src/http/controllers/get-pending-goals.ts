import { getWeekPendingGoals } from "../../use-cases/get-week-pending-goals";

export async function getPendingGoals() {
	const { pendingGoals } = await getWeekPendingGoals();

	return { pendingGoals };
}
