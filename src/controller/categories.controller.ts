import { Request, Response } from "express"
import { CategoryRepository } from "../repositories/CategoryRepository"
import { CreateCategoryService } from "../services/CreateCategoryService"

const categoryRepository = new CategoryRepository()

const createCategory = (request: Request, response: Response) => {
  
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoryRepository)
  createCategoryService.execute({name, description})

  return response.status(201).json({message: "Created successfully"})
}

const getAllCategories = (request: Request, response: Response) => {

  const categories = categoryRepository.showAll()

  return response.status(200).json({message: "All categories", categories})
}

export { 
  createCategory,
  getAllCategories
 }