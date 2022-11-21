import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ListMain, Navbar, MapListAll } from '../../components/index'
import { usePointsApi } from '../../services/use-points.api.js'

export function ListAllHemonucleos() {
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
      {selectedData ? (
        <MapListAll
          allHemonucleos={allHemonucleos}
          selectedData={selectedData}
        />
      ) : (
        <ListMain
          allHemonucleos={allHemonucleos}
          setSelectedData={setSelectedData}
        />
      )}
    </div>
  )
}
