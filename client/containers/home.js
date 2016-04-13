import React, { Component } from 'react'

import HomePage from '../components/pages/home'

class HomeContainer extends Component {
  render () {
    // Temporary default value
    const doodle = {
      image: 'http://lorempixel.com/g/530/207/',
      altText: 'NoDoodles',
      url: '#',
      author: {
        name: 'Richard',
        url: '#'
      }
    }

    return (
      <div>
        <HomePage doodle={doodle} />
      </div>
    )
  }
}

export default HomeContainer
