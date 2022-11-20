import React from 'react';
import { List, ListItem } from '../../components/index'
import picture from '../../imgs/list-pic.svg'
import './style.css'

export function ListMain() {
  // Falta fazer requisição para trazer dados do banco

  return (
    <main className="list-main">
      <section>
        <input type="search" placeholder="Digite o nome do Hemonúcleo" />
        <List>
          <ListItem text="Hemonúcleo de Santa Bárbara" />
          <ListItem text="Hemonúcleo de Cajazeiras" />
          <ListItem text="Hemonúcleo de Sousa" />
          <ListItem text="Hemonúcleo do IFPB - CZ" />
        </List>
      </section>
      <section className="img-section">
        <img src={picture} alt="Imagem decorativa" />
      </section>
    </main>
  )
}