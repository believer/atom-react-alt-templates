import React from 'react'
import ReactDOM from 'react-dom'
import {
  IndexRoute,
  Route,
  Router,
  useRouterHistory
} from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import useScroll from 'scroll-behavior/lib/useStandardScroll'

import App from './views/App'
import NotFound from './views/NotFound'
import Start from './views/Start'

// function redirect (url) {
//   window.location = url
// }

const history = useScroll(useRouterHistory(createBrowserHistory))()

ReactDOM.render((
  <Router history={history}>
    <Route component={App} path="/">
      <IndexRoute component={Start} />
    </Route>
    <Route component={NotFound} path="*" />
  </Router>
), document.getElementById('root'))
