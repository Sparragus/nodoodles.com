import React from 'react'
import { reduxForm } from 'redux-form'

function LoginForm (props) {
  const {fields: {email, password}, handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type='email' placeholder='Email' {...email} />
      </div>
      <div>
        <label>Password</label>
        <input type='password' placeholder='Password' {...password} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm)
