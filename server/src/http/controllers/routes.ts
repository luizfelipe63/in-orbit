import { FastifyInstance } from "fastify";
import { CreateGoals } from "./create-goals";

export async function routes(app: FastifyInstance){
    app.post('/goals', CreateGoals)
}