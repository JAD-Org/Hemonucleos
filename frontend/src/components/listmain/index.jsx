import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { List, ListItem } from '../../components/index'
import picture from '../../imgs/list-pic.svg'
import './style.css'

export function ListMain({ allHemonucleos, setSelectedData }) {
  const input = useRef(null)
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()

    setSearch(input.current.value)
  }

  return (
    <main className='list-main'>
      <section>
        <form onSubmit={handleSearch}>
          <input
            type='search'
            placeholder='Digite o nome do Hemonúcleo'
            ref={input}
            onKeyUp={handleSearch}
          />
        </form>
        <List>
          {allHemonucleos
            .filter(hemo =>
              hemo.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(hemonucleo => (
              <ListItem
                key={hemonucleo.id}
                data={hemonucleo}
                setSelectedData={data => setSelectedData(data)}
              />
            ))}
        </List>
      </section>
      <section className='img-section'>
        <img src={picture} alt='Imagem decorativa' />
      </section>
    </main>
  )
}
