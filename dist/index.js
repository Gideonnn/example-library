
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./example-library.cjs.production.min.js')
} else {
  module.exports = require('./example-library.cjs.development.js')
}
