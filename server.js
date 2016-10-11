'use strict'

require('require-self-ref')

const pino = require('pino')
const pretty = pino.pretty()
pretty.pipe(process.stdout)
const log = pino({
  level: 'debug',
  serializers: {
    err: pino.stdSerializers.err
  }
}, pretty)

// Prevents Marko from writing its generated JS to .marko.js files
require('marko/compiler').defaultOptions.writeToDisk = false
// Let's us require Marko templates like modules, e.g. `require('./template.marko')`
require('marko/node-require').install()

// Configures the singleton instance of Lasso
require('~/lib/lasso')

// Instantiate our web server and give it a logger
const hapi = require('hapi')
const server = new hapi.Server()
server.connection({})
server.register(
  {
    register: require('hapi-pino'),
    options: {
      instance: log
    }
  },
  (err) => {
    if (err) {
      log({err})
      process.exit(1)
    }
  }
)

// Load our routes on the next tick (Hapi 15+ requirement)
setImmediate(() => { server.route(require('~/lib/routes')) })

server.start((err) => {
  if (err) {
    log({err})
    process.exit(1)
  }
})
