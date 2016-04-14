import React from 'react'

import { LoginForm } from '../organisms/login-form'

export function LoginPage (props) {
  return (
    <div>
      <LoginForm onSubmit={props.handleSubmit} />
    </div>
  )
}
