import React from 'react'
import './style.css'

function DoodleSearch (props) {
  const { doodle } = props

  return (
    <div className='container'>
      <div className='search'>
        <a href={doodle.url}>
          <img
            className='doodle'
            src={doodle.image}
            title={doodle.altText}
            alt={doodle.altText} />
        </a>
        <div className='search-controls'>
          <input type='text' />
          <div className='search-buttons'>
            <input type='submit' value='NoDoodles Search'></input>
            <input type='submit' value="I'm Feeling Lucky"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoodleSearch
