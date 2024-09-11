import type { FastifyInstance } from "fastify";
import { CreateGoals } from "./create-goals";
import { getPendingGoals } from "./get-pending-goals";
import { CreateCompletion } from "./create-completion";

export async function routes(app: FastifyInstance) {
	app.post("/goals", CreateGoals);
	app.get("/pending-goals", getPendingGoals);
	app.post("/completion", CreateCompletion);
}
