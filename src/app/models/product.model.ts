import {Category} from "./category.model";
import {Identified} from "./identified.model"

export interface Product extends Identified{
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}
