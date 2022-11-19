import React from 'react'
import picture from '../../imgs/home-pic.svg'
import './style.css'

export function Main() {
  return (
    <main>
      <section className="main-section">
        <h1>HemoJAD</h1>
        <p>
          A plataforma que te ajuda a encontrar e cadastrar
          os Hemonúcleos, trazendo-os pra mais perto de você!
        </p>
        <a className="goto-list" href="/list_all">Encontre os Hemonúcleos</a>
      </section>
      <section>
        <img className="picture" src={picture} alt="Imagem decorativa" />
      </section>
    </main>
  )
}
