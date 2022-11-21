import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './style.css'

export function Pin({ name }) {
  return <Icon icon={locationIcon} className='pin-icon' />
}
