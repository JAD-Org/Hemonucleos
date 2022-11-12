import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import pointsRouter from './routes/points.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.API_PORT || 8080

app.use('/points', pointsRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
