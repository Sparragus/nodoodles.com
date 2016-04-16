import React from 'react'
import { Link } from 'react-router'

import DoodleSearch from '../organisms/doodle-search'

export function HomePage (props) {
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
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='#'>Collaborate</Link></li>
            <li><Link to='#'>About</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
