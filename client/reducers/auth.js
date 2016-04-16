/* global localStorage */

const initialState = {
  isAuthenticating: false,
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token')
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticating: false
      }
    default:
      return state
  }
}
