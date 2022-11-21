import React from 'react'
import GoogleMapReact from 'google-map-react'
import arrow from '../../imgs/arrow-icon.png'
import { Pin } from '..'
import './style.css'

export function MapAdd({
  allHemonucleos,
  coords,
  name,
  setCoords,
  setName,
  addNewPoint,
  isButtonDisabled
}) {
  return (
    <main className='main-map'>
      <div className='container-map'>
        <input
          type='text'
          className='input-search'
          placeholder='Hemonúcleo a ser cadastrado'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <button
          onClick={() => addNewPoint(name, coords)}
          disabled={isButtonDisabled}
          className='send-btn'
        >
          Enviar
        </button>
        <div className='div-map-image'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            defaultCenter={{
              lat: -6.8896525,
              lng: -38.544857
            }}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals
            onClick={event => setCoords({ lat: event.lat, lng: event.lng })}
          >
            {allHemonucleos.map(hemonucleo => {
              return (
                <Pin
                  key={hemonucleo.id}
                  lat={hemonucleo.lat}
                  lng={hemonucleo.lng}
                  name={hemonucleo.name}
                />
              )
            })}
            {coords && (
              <Pin
                lat={coords.lat}
                lng={coords.lng}
                name={name !== '' ? name : 'Digite um nome'}
              />
            )}
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
