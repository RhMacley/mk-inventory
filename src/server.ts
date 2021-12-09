import express from 'express'
import { categoriesRoutes }  from './routes/categories.route'

const app = express()
const PORT = 3333

app.use(express.json())

//Routes from API
app.use("/categories", categoriesRoutes)

app.listen(PORT, () => console.log(`App running on port ${PORT}...`))