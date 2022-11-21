import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export function Navbar() {
  return (
    <nav className='global-nav'>
      <ul className='nav-menu'>
        <li>
          <NavLink activeClassName='active' to='/' title='Ir para home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/list_all' title='Ir para lista de hemonúcleos'>
            Hemos List
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/add' title='Ir para o mapa'>
            Hemos Map
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
