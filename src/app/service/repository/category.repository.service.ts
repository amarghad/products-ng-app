import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from "../../models/category.model";
import { secretarySubscribe } from "../../utils/secretary-subscribe";
import { HttpSecretary } from "../../utils/http-secretary";
import {RepositoryService} from "./repository.service";
import {PageRequest} from "../../utils/page-request";

@Injectable({
  providedIn: 'root'
})
export class CategoryRepositoryService implements RepositoryService<Category>{

  private static readonly REPOSITORY_URL: string = "http://localhost:9080/categories";

  constructor(private http: HttpClient) {}

  @secretarySubscribe
  get(id: string | number): HttpSecretary<Category> {
      // @ts-ignore
    return this.http.get(`${CategoryRepositoryService.REPOSITORY_URL}/${id}`);
  }

  @secretarySubscribe
  delete(category: Category): HttpSecretary<Category> {
    // @ts-ignore
    return this.http.delete(`${CategoryRepositoryService.REPOSITORY_URL}/${category.id}`);
  }

  @secretarySubscribe
  update(category: Category): HttpSecretary<Category> {
    // @ts-ignore
    return this.http.put(`${CategoryRepositoryService.REPOSITORY_URL}/${id}`, category);
  }

  @secretarySubscribe
  save(category: Category): HttpSecretary<Category> {
    // @ts-ignore
    return this.http.post(CategoryRepositoryService.REPOSITORY_URL, category);
  }

  @secretarySubscribe
  search(keyword : string = "", pageRequest : PageRequest = new PageRequest()) : HttpSecretary<Array<Category>> {
    // @ts-ignore
    return this.http.get<Category>(CategoryRepositoryService.REPOSITORY_URL);
  }

}
