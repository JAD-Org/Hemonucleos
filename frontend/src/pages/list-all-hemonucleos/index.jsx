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

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAllHemonucleos()
    setIsLoading(false)
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
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
