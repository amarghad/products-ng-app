import {HttpParams} from "@angular/common/http";

export class PageRequest {

  constructor(private _currentPage : number = 1, private _itemsPerPage : number = Infinity) {
    if (_currentPage < 1) throw new RangeError("Requested current page has to be greated than 1");
  }

  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  get currentPage(): number {
    return this._currentPage;
  }

}
