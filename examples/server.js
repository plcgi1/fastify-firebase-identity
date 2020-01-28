const config = require('./config/environment')
const package = require('./package')

const fastify = require('fastify')({
  logger: true,
  // http2: true
  // TODO add https
})

fastify.setErrorHandler(function (error, request, reply) {
  console.info('error', JSON.stringify(error, null, 2))

  request.log.warn(error)

  const statusCode = error.statusCode >= 400 ? error.statusCode : 500

  if (error.validation) {
    const errors = error.validation.map(e => { return { message: e.message } })

    reply.status(400).send(errors)

    return
  }

  reply
    .code(statusCode)
    .type('application/json')
    .send(statusCode >= 500 ? { message: 'Server error' } : { message: error.message })
})

const start = async () => {
  try {
    fastify.register(require('fastify-cors'), {
      // put your options here
    })

    fastify.register(require('fastify-swagger'), {
      routePrefix: '/docs',
      exposeRoute: true,
      swagger: {
        info: {
          title: package.description,
          description: package.description,
          version: package.version
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here'
        },
        host: `${config.host}:${config.port}`,
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
          { name: 'users', description: 'Users related end-points' }
        ],
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'authorization',
            in: 'header'
          }
        }
      }
    })

    // add this plugin, in real world = require('fastify-firebase-identity', { ... })
    fastify.register(require('../'), {
      // firebase credentials
    })

    await fastify.ready()

    await fastify.listen(config.port)

    fastify.swagger()
  } catch (err) {
    fastify.log.error(err)

    process.exit(1)
  }
}

start()
