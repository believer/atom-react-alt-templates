export function get (route) {
  return fetch(route)
    .then(response => response.json())
    .catch(err => console.log(route, err))
}

export function post (route, data) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }

  return fetch(route, options)
    .then(response => response.json())
    .catch(err => console.log(route, err))
}

export function put (route, data) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  }

  return fetch(route, options)
    .then(response => response.json())
    .catch(err => console.log(route, err))
}

export default {
  get,
  post,
  put
}
