import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Pin } from '..'
import './style.css'

export function MapListAll({ allHemonucleos, selectedData }) {
  return (
    <main className='main-map'>
      <div className='container-map'>
        <div className='div-map-image'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: ''
            }}
            defaultCenter={{ lat: selectedData.lat, lng: selectedData.lng }}
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
    </main>
  )
}
