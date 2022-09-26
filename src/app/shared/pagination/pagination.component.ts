import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'country-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() countriesPerPage: number = 4;
  @Input() countriesNumber: number = 0;
  @Input() allPagesNumber: number = 0;

  @Output() changePage: EventEmitter<number> = new EventEmitter<number>()

  private _currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }


  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(page) {
    this._currentPage = page
    this.changePage.emit(this.currentPage)
  }

  onSetPage(event: any): void {
    this.currentPage = event.target.value;
  }


  onFirst(): void {
    this.currentPage = 1;
  }

  onLast(): void {
    this.currentPage = this.allPagesNumber;
  }
  
  onPreviousPage(): void {
    this.currentPage--
  }
  onNextPage(): void {
    this.currentPage++
  }

}
