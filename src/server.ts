import express from 'express'
import { router } from './routes/index.routes'

const app = express()
const PORT = 3333

app.use(express.json())

//API Route
app.use(router)

app.listen(PORT, () => console.log(`App running on port ${PORT}...`))