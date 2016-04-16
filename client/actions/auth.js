/* global localStorage */

import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'

function apiCallUrl (path = '') {
  const baseUrl = '/api/'
  return baseUrl + path
}

export function login (data, redirect = '/') {
  return async function (dispatch) {
    const actionResponse = await dispatch({
      [CALL_API]: {
        endpoint: apiCallUrl('login'),
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'LOGIN_REQUEST',
          {
            type: 'LOGIN_SUCCESS',
            payload: (action, state, res) => res.json()
          },
          'LOGIN_FAILURE'],
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })

    if (actionResponse.error) {
      // TODO: Handle error
      return console.log('ERROR LOGGING IN')
    }

    localStorage.setItem('token', actionResponse.payload.token)

    return await dispatch(push(redirect))
  }
}
