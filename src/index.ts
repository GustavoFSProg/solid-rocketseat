import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`API running on PORT: ${PORT}`)
})

export default app
