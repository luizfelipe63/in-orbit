import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { createGoalCompletion } from "../../use-cases/create-goal-completion";

export async function CreateCompletion(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const createCompletionBodySchema = z.object({
		goalId: z.string(),
	});

	const { goalId } = createCompletionBodySchema.parse(request.body);

	await createGoalCompletion({
		goalId,
	});
}
