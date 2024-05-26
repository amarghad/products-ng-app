import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {RepositoryService} from "./repository.service";
import {secretarySubscribe} from "../../utils/secretary-subscribe";
import {HttpSecretary} from "../../utils/http-secretary";
import {PageRequest} from "../../utils/page-request";

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService implements RepositoryService<Product> {

  private static readonly REPOSITORY_URL : string = "http://localhost:9080/products";

  constructor(private http : HttpClient) { }

  get(id: string | number) : HttpSecretary<Product> {
    // @ts-ignore
    return this.http.get<Product>(`${ProductRepositoryService.REPOSITORY_URL}/${id}`);
  }

  @secretarySubscribe
  search(keyword : string = String(), pageRequest : PageRequest = new PageRequest()) : HttpSecretary<Array<Product>> {
    const params : HttpParams = new HttpParams()
      .set("title_like", keyword)
      .set("_limit", pageRequest.itemsPerPage)
      .set("_page", pageRequest.currentPage);

    // @ts-ignore
    return this.http.get<Array<Product>>(ProductRepositoryService.REPOSITORY_URL, { params, observe : "response" });
  }

  @secretarySubscribe
  save(product : Product) :HttpSecretary<Product> {
    // @ts-ignore
    return this.http.post<Product>(ProductRepositoryService.REPOSITORY_URL, product);
  }

  @secretarySubscribe
  delete(product : Product) : HttpSecretary<Product> {
    // @ts-ignore
    return this.http.delete<Product>(`${ProductRepositoryService.REPOSITORY_URL}/${product.id}`);
  }
  @secretarySubscribe
  update(product : Product) : HttpSecretary<Product> {
    // @ts-ignore
    return this.http.put<Product>(`${ProductRepositoryService.REPOSITORY_URL}/${product.id}`, product);
  }

}
