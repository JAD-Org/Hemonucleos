import { Point } from '../models/point.js'

const addPoint = async (req, res) => {
  try {
    const { name, lat, lng } = req.body
    //adiiconar validacaoes undefined/null
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
  res.status(200).json(hemonucleos)
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
