import {PageRequest} from "./page-request";
import {BehaviorSubject } from "rxjs";

export class Paginator {

  private _currentPage$ : BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _itemsPerPage$ : BehaviorSubject<number> = new BehaviorSubject<number>(Infinity);


  constructor(private _totalItems : number = 0, itemsPerPage : number = Infinity) {
    this._currentPage$.next(1);
    this._itemsPerPage$.next(itemsPerPage);
  }

  /**
   * Check if the current page refers to last page
   */
  get isLastPage() : boolean {
    return this._currentPage$.getValue() == this.totalPages;
  }

  /**
   * Check if the current refers to first page
   */
  get isFirstPage() : boolean {
    return this._currentPage$.getValue() == 1;
  }

  /**
   * Create setter to notify subscribers about the given page value
   * Page number {value} must be in range of 1 and counted total pages
   * @param value
   */
  set currentPage$(value: number) {
    if (value < 1 || value > this.totalPages) {
      throw new RangeError(`Number of pages range exceeded, value have to be between 1 and ${this.totalPages}. Page given is : ${value}`);
    }
    this._currentPage$.next(value);
  }

  set itemsPerPage(value: number) {
    this._itemsPerPage$.next(value);
    if (this.totalPages > 0 && this._currentPage$.getValue() >= this.totalPages) {
      this.jumpToLast();
    }
  }

  get pages() : Array<number> {
    return Array.from({length: (this.totalPages)}, (v, k) => k + 1);
  }

  set totalItems(value: number) {
    this._totalItems = value;
  }

  get currentPage$(): BehaviorSubject<number> {
    return this._currentPage$;
  }

  get itemsPerPage(): number {
    return this._itemsPerPage$.getValue();
  }

  get itemsPerPage$(): BehaviorSubject<number> {
    return this._itemsPerPage$;
  }

  get totalItems(): number {
    return this._totalItems;
  }

  get totalPages(): number {
    let num : number = Math.floor(this._totalItems / this._itemsPerPage$.getValue());
    if (this._totalItems % this.itemsPerPage$.getValue() > 0) {
      num += 1;
    }
    return num;
  }

  jump(page : number) : void {
    this.currentPage$ = page;
  }

  jumpByStep(step : number) : void {
    return this.jump(this.currentPage$.getValue() + step);
  }

  jumpToLast() : void {
    return this.jump(this.totalPages);
  }

  jumpToFirst() : void {
    return this.jump(1);
  }

  get minOffset() : number {
    return (this._currentPage$.getValue() - 1) * this._itemsPerPage$.getValue() + 1;
  }

  get maxOffset() : number {
    return Math.min(this.totalItems, this._currentPage$.getValue() * this._itemsPerPage$.getValue());
  }

}
