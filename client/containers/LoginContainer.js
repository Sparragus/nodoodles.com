/* global localStorage */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import { LoginPage } from '../components/pages'

import { login } from '../actions/auth'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    if (localStorage.token) {
      this.props.replace('/')
    }
  }

  handleSubmit (data) {
    // TODO: See if the user intended to go a page that required auth. Redirect there.
    const redirect = '/'
    this.props.login(data, redirect)
  }

  render () {
    return (
      <LoginPage handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(
  mapStateToProps,
  { replace, login }
)(LoginContainer)
