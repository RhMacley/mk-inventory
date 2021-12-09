import { Router, Request, Response } from "express"
import { CategoryRepository } from "../repositories/CategoryRepository"
import { CreateCategoryService } from "../services/CreateCategoryService"

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()
const categoryService = new CreateCategoryService(categoryRepository)

categoriesRoutes.post("/", (request: Request, response: Response) => {
  
  const { name, description } = request.body

  categoryService.execute({name, description})

  return response.status(201).json({message: "Created successfully"})
})

categoriesRoutes.get("/", (request: Request, response: Response) => {

  const categories = categoryRepository.showAll()

  return response.status(200).json({message: "All categories", categories})
})

export { categoriesRoutes }