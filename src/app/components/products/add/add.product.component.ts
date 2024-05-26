import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductRepositoryService} from "../../../service/repository/product.repository.service";
import {Product} from "../../../models/product.model";
import Swal from 'sweetalert2'
import {CategoryRepositoryService} from "../../../service/repository/category.repository.service";
import {Category} from "../../../models/category.model";


@Component({
  selector: 'app-add-product',
  templateUrl: './add.product.component.html',
})
export class AddProductComponent implements OnInit {

  protected productForm! : FormGroup;
  protected categories! : Array<Category>;

  ngOnInit() {

    this.productForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(7)]),
      category: new FormControl('', [ Validators.required ]),
      quantity: new FormControl('', [ Validators.required, Validators.min(0) ]),
      price: new FormControl('', [ Validators.required, Validators.min(0) ]),
      checked: new FormControl(false, [ Validators.required ])
    });

    //this.categoryService.getAllCategories().subscribe(out => this.categories = out);

  }


  constructor(private productService: ProductRepositoryService,
              private categoryService : CategoryRepositoryService) {}

  onSubmit() {
    let product : Product = this.productForm.value;

  }
}
