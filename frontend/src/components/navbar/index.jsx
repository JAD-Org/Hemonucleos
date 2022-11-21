import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export function Navbar() {
  return (
    <nav className='global-nav'>
      <ul className='nav-menu'>
        <li>
          <Link to='/' title='Ir para home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/list_all' title='Ir para lista de hemonúcleos'>
            Hemos List
          </Link>
        </li>
        <li>
          <Link to='/add' title='Ir para o mapa'>
            Hemos Map
          </Link>
        </li>
      </ul>
    </nav>
  )
}
