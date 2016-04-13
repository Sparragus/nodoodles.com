import React from 'react'

import DoodleSearch from '../organisms/doodle-search'

function HomePage (props) {
  const { doodle } = props

  return (
    <div>
      <DoodleSearch doodle={doodle}/>

      <footer>
        <div>
          <p>Doodle by <a href={doodle.author.url}>{doodle.author.name}</a></p>
        </div>
        <div>
          <ul className='horizontal'>
            <li><a href='#'>Log in</a></li>
            <li><a href='#'>Collaborate</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
