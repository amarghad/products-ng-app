import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductRepositoryService} from "../../../service/repository/product.repository.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpSecretary} from "../../../utils/http-secretary";

@Component({
  selector: 'app-view.product',
  templateUrl: './view.product.component.html',
})
export class ViewProductComponent implements OnInit {

  private secretary! : HttpSecretary<Product>
  protected product! : Product;

  constructor(private productRepository : ProductRepositoryService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.secretary = this.productRepository.get(productId);
      this.secretary.output$.subscribe(x => this.product = x);
    }
  }

}
