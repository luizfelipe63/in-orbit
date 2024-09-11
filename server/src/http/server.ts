import fastify from "fastify";
import { routes } from "./controllers/routes";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
	origin: "*",
});

app.register(routes);

app
	.listen({
		host: "0.0.0.0",
		port: 3333,
	})
	.then(() => {
		console.log("🎯 HTTP Server Running");
	});
