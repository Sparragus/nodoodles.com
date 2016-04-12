import React from 'react'
import { Router, Route } from 'react-router'

import App from './containers/app'
import Foo from './containers/foo'

export default function routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='foo' component={Foo} />
      </Route>
    </Router>
  )
}
