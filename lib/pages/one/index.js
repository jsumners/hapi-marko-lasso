'use strict'

const page = require('./template.marko')

const pageOne = {
  path: '/one',
  method: 'GET',
  handler (req, reply) {
    req.log(['debug'], 'recieved a request for /one')
    reply(page.stream())
  }
}

module.exports = [pageOne]
