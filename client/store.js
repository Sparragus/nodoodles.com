import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers'

const loggerMiddleware = createLogger()

const finalCreateStore = compose(
  applyMiddleware(
    loggerMiddleware
  )
)(createStore)

export default function configureStore (initialState) {
  const store = finalCreateStore(reducers, initialState)
  return store
}
