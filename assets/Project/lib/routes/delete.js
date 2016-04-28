const fetch = require('node-fetch')
const getPathFromUrl = require('../utils/getPathFromUrl')
const nconf = require('nconf').env('__').file({
  file: 'config.json'
})

function delete (req, res) {
  const host = nconf.get('host')
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(req.body)
  }

  fetch(`${host}${getPathFromUrl(req.url)}`, options)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

module.exports = delete
