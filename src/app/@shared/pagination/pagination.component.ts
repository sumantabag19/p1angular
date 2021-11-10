import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../_models/pagination';

import { Logger } from '@app/@core';
const log = new Logger('PaginationComponent');

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Output() pageChangedEvent = new EventEmitter<Pagination>();

  constructor() {}

  ngOnInit() {
    log.info(this.pagination);
  }

  pageChanged(event: any) {
    this.pagination.pageNumber = event.page;
    this.pagination.pageSize = event.itemsPerPage;
    this.pageChangedEvent.emit(this.pagination);
  }
}
