'use strict'

const page = require('./template.marko')

const slash = {
  path: '/',
  method: 'GET',
  handler (req, reply) {
    req.log(['debug'], 'received a request for /')
    reply(page.stream())
  }
}

module.exports = [slash]
