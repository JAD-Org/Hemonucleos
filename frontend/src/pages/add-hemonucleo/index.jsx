import React from 'react'
import { Navbar, MapAdd } from '../../components/index.js'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePointsApi } from '../../services/use-points.api.js'

export function AddHemonucleo() {
  const [allHemonucleos, setAllHemonucleos] = useState([])
  const [coords, setCoords] = useState(undefined)
  const [name, setName] = useState('')
  const pointsApi = usePointsApi()

  const getAllHemonucleos = useCallback(async () => {
    try {
      const allPoints = await pointsApi.listAllPoints()
      setAllHemonucleos(allPoints)
    } catch {
      alert('Algo deu errado... Atualize a página para tentar novamente.')
    }
  }, [])

  const addNewPoint = useCallback(async (name, coords) => {
    try {
      await pointsApi.addPoint(name, coords.lat, coords.lng)
      setName('')
      setCoords(undefined)
      alert('Adicionado com sucesso!')
    } catch {
      alert('Algo deu errado... Tente novamente.')
    }
  }, [])

  useEffect(() => {
    getAllHemonucleos()
  }, [])

  const isButtonDisabled = name === '' || !coords

  return (
    <div>
      <Navbar />
      <MapAdd
        allHemonucleos={allHemonucleos}
        coords={coords}
        name={name}
        setCoords={setCoords}
        setName={setName}
        addNewPoint={addNewPoint}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  )
}
