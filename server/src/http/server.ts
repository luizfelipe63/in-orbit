import fastify from 'fastify'
import { routes } from './controllers/routes'

const app = fastify()

app.register(routes)

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log('🎯 HTTP Server Running')
  })
