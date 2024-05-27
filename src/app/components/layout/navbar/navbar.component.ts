import { Component } from '@angular/core';
import {CartStateService} from "../../../service/state/cart.state.service";
import {SearchStateService} from "../../../service/state/search.state.service";
import {ProductStateService} from "../../../service/state/product.state.service";
import {ProductRepositoryService} from "../../../service/repository/product.repository.service";
import {PageRequest} from "../../../utils/page-request";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(public cartState : CartStateService) {}

}
