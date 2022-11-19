import React from 'react'
import mapImage from '../../imgs/imagem-mapa.png'
import arrow from '../../imgs/arrow-icon.png'
import './style.css'

export function MapContent() {
    return (
        <main className='main-map'>
            <div className='container-map'>
                <input type="text" className='input-search' placeholder='Digite aqui o local' />
                <div className='div-map-image'>
                    <img className="exemplo-map-image" src={mapImage} alt="Imagem decorativa" />
                </div>
            </div>
            <footer>
                <p>Clique em um ponto do mapa para cadastrar um Hemonúcleo</p>
                <img src={arrow} alt="Seta do Mouse" />
            </footer>
        </main>
    )
}
