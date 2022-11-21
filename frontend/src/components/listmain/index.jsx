import React from 'react'
import { List, ListItem } from '../../components/index'
import picture from '../../imgs/list-pic.svg'
import './style.css'

export function ListMain({ allHemonucleos }) {
  return (
    <main className='list-main'>
      <section>
        <input type='search' placeholder='Digite o nome do Hemonúcleo' />
        <List>
          {allHemonucleos.map(hemonucleo => (
            <ListItem text={hemonucleo.name} />
          ))}
        </List>
      </section>
      <section className='img-section'>
        <img src={picture} alt='Imagem decorativa' />
      </section>
    </main>
  )
}
