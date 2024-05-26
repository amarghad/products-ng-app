import { Injectable } from '@angular/core';
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  private checkedProducts! : Product[];

  constructor() {
    this.checkedProducts = []
  }

  get total() {
    return this.checkedProducts.length;
  }

  add(product : Product, quantity : number = 1) {
    this.checkedProducts.push(product);
  }

  exists(product : Product) {
    return this.checkedProducts.includes(product);
  }

  remove(product : Product) {
    this.checkedProducts = this.checkedProducts.filter(p => p.id != product.id);
  }

}
