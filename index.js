const fp = require('fastify-plugin')

const init = async (fastify, config, done) => {
  /*
  config: {
    firebase
    jwt
  }
  */
  fastify.register(require('./src/plugins/fastify-firebase-auth'), {
    apiKey: config.firebase.apiKey,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket
  })

  // register routes
  fastify.register(require('./src/api/version'), { prefix: '/identity/version' })
  fastify.register(require('./src/api/auth'), { prefix: '/identity/auth' })

  // decorate fastify instance
  // fastify.decorate('subscribers', subscribers)
  // decorate request object
  // fastify.decorateRequest('subscribers', subscribers)

  done()
}

module.exports = fp(
  init,
  {
    fastify: '2.x',
    name: 'fastify-firebase-identity'
  }
)
