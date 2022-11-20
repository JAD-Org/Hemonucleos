import React from 'react'
import './style.css'

export function Navbar() {
  return (
    <nav className="global-nav">
      <ul className="nav-menu">
        <li>
          <a href="/" title="Ir para home">Home</a>
        </li>
        <li>
          <a href="/list_all" title="Ir para lista de hemonúcleos">Hemos List</a>
        </li>
        <li>
          <a href="/add" title="Ir para o mapa">Hemos Map</a>
        </li>
      </ul>
    </nav>
  )
}