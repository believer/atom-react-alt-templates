const nconf = require('nconf').env('__').file({
  file: 'config.json'
})

const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const path = require('path')

const port = nconf.get('PORT') || 4000

const app = express()

app.use(bodyParser.json())

routes.register(app)

// Different middleware for serving the react files if running production or development
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const config = require('../webpack.config.dev')

  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use('/static', express.static('dist'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
