import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexProductsComponent } from "./components/products/index/index.products.component";
import {AddProductComponent} from "./components/products/add/add.product.component";
import {UpdateProductComponent} from "./components/products/update/update.product.component";
import {CartComponent} from "./components/cart/cart.component";
import {ViewProductComponent} from "./components/products/view/view.product.component";

const routes: Routes = [
  {path: 'products', component: IndexProductsComponent},
  {path: 'products/add', component: AddProductComponent},
  {path: 'products/update/:id', component: UpdateProductComponent},
  {path: 'products/:id', component: ViewProductComponent},
  {path: 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
