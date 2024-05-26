import { Component } from '@angular/core';
import {CategoryRepositoryService} from "../../service/repository/category.repository.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {

  constructor(private cs : CategoryRepositoryService) {
  }

}
