import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import Routes from './routes'

const initialState = () => ({})
const store = configureStore(initialState(), browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

function Root () {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  )
}

render(<Root />, document.getElementById('app'))
