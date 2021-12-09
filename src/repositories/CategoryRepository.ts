import { Category } from "../model/Category"

interface ICreateCategoryDTO {
  name: string;
  description: string
}

class CategoryRepository {

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

  showAll(): Array<Category> {
    return this.categories
  }

  findByName(name: string): Category {
    let category = this.categories.find(category => category.name === name)
    return category
  }
}

export { CategoryRepository }