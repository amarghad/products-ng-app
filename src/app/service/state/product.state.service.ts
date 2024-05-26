import {Injectable} from '@angular/core';
import {HttpSecretary} from "../../utils/http-secretary";
import {Product} from "../../models/product.model";
import {Paginator} from "../../utils/paginator";
import {ProductRepositoryService} from "../repository/product.repository.service";
import {SearchStateService} from "./search.state.service";
import {PageRequest} from "../../utils/page-request";

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  public static readonly ITEMS_PER_PAGE : number = 10;

  private _products : Array<Product> = [];
  private _loaded : boolean = false;
  private _paginator : Paginator = new Paginator();

  constructor(
      private productRepository : ProductRepositoryService,
      private searchState : SearchStateService
  ) {
    this._paginator.itemsPerPage = ProductStateService.ITEMS_PER_PAGE;
    this._paginator.currentPage$.subscribe(page =>
      this.productsSecretary = productRepository.search(searchState.keyword, new PageRequest(page, this.paginator.itemsPerPage))
    );
  }

  set productsSecretary(secretary: HttpSecretary<Array<Product>>) {
    secretary.output$.subscribe((response : any) => {
      this._paginator.totalItems = parseInt(response.headers.get("X-Total-Count"));
      this._products = response.body
    });
    secretary.status$.subscribe(out => this._loaded = (out == HttpSecretary.STATUS.LOADED))
  }


  get paginator(): Paginator {
    return this._paginator;
  }

  get products(): Array<Product> {
    return this._products;
  }

  get loaded(): boolean {
    return this._loaded;
  }
}
