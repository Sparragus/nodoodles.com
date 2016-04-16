import { createStore, applyMiddleware } from 'redux'

// Middleware
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'

import reducers from './reducers'

const middleware = applyMiddleware(
  apiMiddleware,
  thunkMiddleware,
  createLogger()
)

export default function configureStore (initialState) {
  const store = createStore(reducers, initialState, middleware)
  return store
}
