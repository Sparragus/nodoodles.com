import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        Hello, World!
        {this.props.children}
      </div>
    )
  }
}

export default App
