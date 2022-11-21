import { Point } from '../models/point.js'

const addPoint = async (req, res) => {
  try {
    const { name, lat, lng } = req.body

    if (!name || !lat || !lng) {
      res.status(400).send('Enter all fields!')
      return
    }

    const geometry = {
      type: 'Point',
      coordinates: [lat, lng],
    }

    await Point.create({ name, geometry })
    res.status(200).send('Point created!')
  } catch {
    res.status(400).send('Something went wrong!')
  }
}

const listAllPoints = async (_, res) => {
  const hemonucleos = await Point.findAll()

  const newHemonucleos = hemonucleos.map(hemonucleo => ({
    id: hemonucleo.id,
    name: hemonucleo.name,
    lat: hemonucleo.geometry.coordinates[0],
    lng: hemonucleo.geometry.coordinates[1],
  }))

  res.status(200).json(newHemonucleos)
}

const syncronize = async (_, res) => {
  await Point.sync()
  res.status(200).send('Sincronizado')
}

export default {
  addPoint,
  listAllPoints,
  syncronize,
}
