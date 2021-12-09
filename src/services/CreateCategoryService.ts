import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest{
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(
    private categoryRepository: ICategoriesRepository
  ) {}

  execute({name, description}: IRequest): void {
    const alreadysExists = this.categoryRepository.findByName(name)

    if(alreadysExists){
      throw new Error("Category already exists")
    }

    this.categoryRepository.create({name, description})

    }
}

export { CreateCategoryService }