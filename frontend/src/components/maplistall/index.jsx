import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Pin } from '..'
import './style.css'

export function MapListAll({ allHemonucleos, selectedData }) {
  console.log(selectedData)
  return (
    <main className='main-map'>
      <div className='container-map'>
        <div className='div-map-image'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            defaultCenter={{
              lat: selectedData.lat,
              lng: selectedData.lng
            }}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals
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
          </GoogleMapReact>
        </div>
      </div>
    </main>
  )
}
