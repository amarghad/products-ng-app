import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductRepositoryService} from "../../../service/repository/product.repository.service";
import {CartStateService} from "../../../service/state/cart.state.service";
import {SecretaryStatus} from "../../../utils/http-secretary";
import {ProductStateService} from "../../../service/state/product.state.service";
import {SearchStateService} from "../../../service/state/search.state.service";
import {PageRequest} from "../../../utils/page-request";

@Component({
  selector: 'app-products',
  templateUrl: './index.products.component.html',
})
export class IndexProductsComponent implements OnInit{
  protected keyword: string = "";

  constructor(public productState : ProductStateService,
              public productRepository : ProductRepositoryService,
              public searchState : SearchStateService,
              public cartState : CartStateService) {
  }

  ngOnInit(): void {
    this.productState.productsSecretary = this.productRepository.search("", new PageRequest(1, ProductStateService.ITEMS_PER_PAGE));
  }

  handleCheckProduct(product : Product) {
    this.cartState.exists(product) ? this.cartState.remove(product) : this.cartState.add(product);
  }


  handleSearch() {
    this.searchState.keyword = this.keyword;
    this.productState.productsSecretary = this.productRepository.search(
      this.searchState.keyword,
      new PageRequest(1, 10)
    );
  }

  handleDelete(product: Product) {
    this.productRepository.delete(product).status$.subscribe(s => {
      if (s == SecretaryStatus.LOADED){
        alert("Produit supprimé");
        this.handleSearch();
      }
    })
  }
}
