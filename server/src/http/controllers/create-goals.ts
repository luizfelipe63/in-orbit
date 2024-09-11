import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { createGoal } from "../../use-cases/create-goals";

export async function CreateGoals(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const createGoalsBodySchema = z.object({
		title: z.string(),
		desiredWeeklyFrequency: z.number().int().min(1).max(7),
	});

	const { desiredWeeklyFrequency, title } = createGoalsBodySchema.parse(
		request.body,
	);

	await createGoal({
		desiredWeeklyFrequency,
		title,
	});
}
