import { Category } from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {

  constructor() {
    this.categories = []
  }


  public categories: Category[]

  create({name, description}: ICreateCategoryDTO): void {
    let category = new Category()

    Object.assign(category, {
    name,
    description,
    createdAt: new Date()
  })

    this.categories.push(category)
  }

  showAll(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    let category = this.categories.find(category => category.name === name)
    return category
  }
}

export { CategoryRepository }