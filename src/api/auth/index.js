async function routes (fastify, options) {
  fastify.post(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string' }
          }
        },
        summary: 'Sign Up to app and get access token',
        tags: ['auth']
      }
    },
    async (req, reply) => {
//  TODO sign jwt
      const { email, password } = req.body;

      const response = await fastify.auth.signInWithEmailAndPassword(email, password);

      return response;
    }
  )
}

module.exports = routes