/* global localStorage */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import { LoginPage } from '../components/pages'

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
    console.log(data)
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
  { replace }
)(LoginContainer)
