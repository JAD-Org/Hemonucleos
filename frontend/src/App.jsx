import React from 'react'
import { Router } from './router.jsx'
import './App.css'
import { useEffect } from 'react'
import { usePointsApi } from './services/use-points.api.js'
import { useCallback } from 'react'

function App() {
  const pointsApi = usePointsApi()

  const syncDatabase = useCallback(
    async () => await pointsApi.syncDatabase(),
    []
  )

  useEffect(() => {
    syncDatabase()
  }, [])

  return <Router />
}

export default App
