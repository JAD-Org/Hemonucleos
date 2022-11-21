import React from 'react'
import { Navbar, MapAdd } from '../../components/index.js'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePointsApi } from '../../services/use-points.api.js'

export function AddHemonucleo() {
  const [allHemonucleos, setAllHemonucleos] = useState([])
  const [selectedData, setSelectedData] = useState(undefined)
  const pointsApi = usePointsApi()

  const getAllHemonucleos = useCallback(async () => {
    const allPoints = await pointsApi.listAllPoints()
    setAllHemonucleos(allPoints)
  }, [])

  useEffect(() => {
    getAllHemonucleos()
  }, [])

  return (
    <div>
      <Navbar />
      <MapAdd allHemonucleos={allHemonucleos} />
    </div>
  )
}
