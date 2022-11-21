import React from 'react'
import './style.css'

export function ListItem(props) {
  return (
    <li className='list-item' onClick={() => props.setSelectedData(props.data)}>
      {props.data.name}
    </li>
  )
}
