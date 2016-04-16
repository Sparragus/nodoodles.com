import { createStore, applyMiddleware } from 'redux'

// Middleware
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

export default function configureStore (initialState, history) {
  const middleware = applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    routerMiddleware(history),
    createLogger()
  )

  const store = createStore(reducers, initialState, middleware)
  return store
}
