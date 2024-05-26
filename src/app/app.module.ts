import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexProductsComponent } from './components/products/index/index.products.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AddProductComponent } from './components/products/add/add.product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SpinnerComponent } from './components/kits/spinner/spinner.component';
import { AuthInterceptor } from "./service/interceptor/auth.interceptor";
import { ViewProductComponent } from './components/products/view/view.product.component';
import { PaginationComponent } from './components/kits/pagination/pagination.component';
import { CartComponent } from './components/cart/cart.component';
import { UpdateProductComponent } from './components/products/update/update.product.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexProductsComponent,
    NavbarComponent,
    AddProductComponent,
    SpinnerComponent,
    ViewProductComponent,
    PaginationComponent,
    CartComponent,
    UpdateProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    { provide : HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
