import { Router } from "express"
import { createCategory, getAllCategories } from '../controller/categories.controller'

const categoryRouter = Router()

categoryRouter.post("/", createCategory)

categoryRouter.get("/", getAllCategories)

export { categoryRouter }