'use strict'

const fs = require('fs')
const path = require('path')

let routes = []
const files = fs.readdirSync(path.join(__dirname, 'pages'))
for (const f of files) {
  routes = routes.concat(
    require(path.join(__dirname, 'pages', f))
  )
}

module.exports = routes
