const fp = require('fastify-plugin')

const init = async (fastify, config, done) => {
  /*
  config: {

  }
  */
  // register routes
  fastify.register(require('./src/api/users'), { prefix: '/identity/users' })

  // decorate fastify instance
  // fastify.decorate('subscribers', subscribers)
  // decorate request object
  // fastify.decorateRequest('subscribers', subscribers)

  done()
}

module.exports = fp(init)
