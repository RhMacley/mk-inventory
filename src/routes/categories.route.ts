import { Router, Request, Response } from "express"
import { CategoryRepository } from "../repositories/CategoryRepository"
import { CreateCategoryService } from "../services/CreateCategoryService"

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post("/", (request: Request, response: Response) => {
  
  const { name, description } = request.body

  const categoryService = new CreateCategoryService(categoryRepository)
  categoryService.execute({name, description})

  return response.status(201).json({message: "Created successfully"})
})

categoriesRoutes.get("/", (request: Request, response: Response) => {

  const categories = categoryRepository.showAll()

  return response.status(200).json({message: "All categories", categories})
})

export { categoriesRoutes }