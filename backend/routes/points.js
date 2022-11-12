import { Router } from 'express'
import controller from '../controllers/point.js'

const router = Router()

router.post('/', controller.addPoint)

router.get('/', controller.listAllPoints)

router.get('/sync', controller.syncronize)

export default router
