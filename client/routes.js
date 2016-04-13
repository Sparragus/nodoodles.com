import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Home from './containers/home'

export default function routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
