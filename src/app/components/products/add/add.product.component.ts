import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductRepositoryService} from "../../../service/repository/product.repository.service";
import {Product} from "../../../models/product.model";
import {CategoryRepositoryService} from "../../../service/repository/category.repository.service";
import {Category} from "../../../models/category.model";
import {SecretaryStatus} from "../../../utils/http-secretary";


@Component({
  selector: 'app-add-product',
  templateUrl: './add.product.component.html',
})
export class AddProductComponent implements OnInit {

  protected productForm! : FormGroup;
  protected categories! : Array<Category>;
  protected status = SecretaryStatus.STARTED

  ngOnInit() {

    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl(''),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.minLength(10)]),
      images: new FormControl('', Validators.required)
    });

    this.categoryRepository.search().output$.subscribe(cats => this.categories = cats);

  }


  constructor(private productRepository: ProductRepositoryService,
              private categoryRepository : CategoryRepositoryService) {}

  onSubmit() {
    let product : Product = this.productForm.value;
    const currentTime = new Date().toISOString();
    product.creationAt = currentTime;
    product.updatedAt = currentTime;
    product.images = this.productForm.value.images.split(",");
    this.productRepository.save(product)
      .status$
      .subscribe(s => this.status = s);
  }

  protected readonly SecretaryStatus = SecretaryStatus;
}
