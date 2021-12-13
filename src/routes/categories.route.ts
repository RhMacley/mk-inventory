import { Router } from "express"
import { createCategory, getAllCategories } from '../controller/categoriesController'

const categoryRouter = Router()

categoryRouter.post("/", createCategory)

categoryRouter.get("/", getAllCategories)

export { categoryRouter }