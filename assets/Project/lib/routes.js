var get = require('./routes/get')
var put = require('./routes/put')

function register (app) {
  app.get('/get', get)
  app.get('/put', put)
}

module.exports = {
  register
}
