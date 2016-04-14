import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/app'
import {
  HomeContainer as Home,
  LoginContainer as Login
} from './containers'

export default function routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='login' component={Login} />
      </Route>
    </Router>
  )
}
