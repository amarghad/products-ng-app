import {Identified} from "./identified.model";

export interface Category extends Identified{
  name: string
  image: string
  creationAt: string
  updatedAt: string
}
