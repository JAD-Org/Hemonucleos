import React from 'react'
import './style.css'

export function Pin({ name }) {
  return (
    <div className='tooltip'>
      <img src='marker.png' alt='Marker' className='pin-icon' />
      <div className='tooltip-text'>{name}</div>
    </div>
  )
}
