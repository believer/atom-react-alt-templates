const fetch = require('node-fetch')
const getPathFromUrl = require('../utils/getPathFromUrl')
const nconf = require('nconf').env('__').file({
  file: 'config.json'
})

function put (req, res) {
  const host = nconf.get('host')
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${req.body.token}`
    },
    method: 'PUT',
    body: JSON.stringify(req.body.data)
  }

  fetch(`${host}${getPathFromUrl(req.url)}`, options)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(error => console.log(error))
}

module.exports = put
