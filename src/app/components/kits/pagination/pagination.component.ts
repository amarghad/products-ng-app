import {Component, Input, OnInit} from '@angular/core';
import {Paginator} from "../../../utils/paginator";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent{

  @Input() public paginator! : Paginator;
  private itemsPerPage! : number;

  handleChangeItemsPerPage() {

  }
}
