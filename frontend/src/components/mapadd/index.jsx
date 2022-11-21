import React from 'react'
import GoogleMapReact from 'google-map-react'
import arrow from '../../imgs/arrow-icon.png'
import { Pin } from '..'

export function MapAdd({ allHemonucleos }) {
  return (
    <main className='main-map'>
      <div className='container-map'>
        <input
          type='text'
          className='input-search'
          placeholder='Digite aqui o local'
        />
        <div className='div-map-image'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: ''
            }}
            defaultCenter={{
              lat: -6.8896525,
              lng: -38.544857
            }}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals
          >
            {allHemonucleos.map(hemonucleo => {
              return (
                <Pin
                  lat={hemonucleo.lat}
                  lng={hemonucleo.lng}
                  name={hemonucleo.name}
                />
              )
            })}
          </GoogleMapReact>
        </div>
      </div>
      <footer>
        <p>Clique em um ponto do mapa para cadastrar um Hemonúcleo</p>
        <img src={arrow} alt='Seta do Mouse' />
      </footer>
    </main>
  )
}
