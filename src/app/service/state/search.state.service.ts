import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {

  private _keyword : string = String();

  set keyword(value: string) {
    this._keyword = value;
  }

  get keyword(): string {
    return this._keyword;
  }
}
