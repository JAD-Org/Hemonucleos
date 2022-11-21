import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../imgs/home-pic.svg'
import './style.css'

export function Main() {
  return (
    <main className='home-main'>
      <section>
        <h1>HemoJAD</h1>
        <p>
          A plataforma que te ajuda a encontrar e cadastrar os Hemonúcleos,
          trazendo-os pra mais perto de você!
        </p>
        <Link to='/list_all'>Encontre os Hemonúcleos</Link>
      </section>
      <section>
        <img src={picture} alt='Imagem decorativa' />
      </section>
    </main>
  )
}
