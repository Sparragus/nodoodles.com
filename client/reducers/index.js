import { merge } from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

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
  form: formReducer,
  routing: routerReducer
})
