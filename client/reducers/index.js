import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { merge } from 'lodash'

import doodles from './doodles'

const initialState = { doodles: {} }
function entities (state = initialState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  return state
}

export default combineReducers({
  entities,
  doodles,
  routing: routerReducer
})
