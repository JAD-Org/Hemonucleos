import { useCallback, useMemo } from 'react'
import { useHttp } from './use-http.js'

export function usePointsApi() {
  const baseURL = 'http://localhost:8080'

  const httpInstance = useHttp(baseURL)

  const addPoint = useCallback(
    async (name, lat, lng) =>
      await httpInstance.post(`/points`, {
        name,
        lat,
        lng
      }),
    [httpInstance]
  )

  const listAllPoints = useCallback(
    async () => await httpInstance.get(`/points`),
    [httpInstance]
  )

  const syncDatabase = useCallback(
    async () => await httpInstance.get(`/points/sync`),
    [httpInstance]
  )

  return useMemo(
    () => ({
      addPoint,
      listAllPoints,
      syncDatabase
    }),
    [addPoint, listAllPoints]
  )
}
