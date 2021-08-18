import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`API running on PORT: ${PORT}`)
})

export default app
