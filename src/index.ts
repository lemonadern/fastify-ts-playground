import fastify from 'fastify'
import type { FastifyInstance, RouteShorthandOptions } from 'fastify'

const server: FastifyInstance = fastify({ logger: true })

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
}

server.get('/ping', opts, async () => {
  return { pong: 'it worked!' }
})

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
