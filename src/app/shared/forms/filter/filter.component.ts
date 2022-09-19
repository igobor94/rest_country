import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-form',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  REGIONS: Array<string> = ['all', 'africa', 'america', 'asia', 'europe', 'oceania']

  filterForm = new FormGroup({
    filterOption: new FormControl('')
  })

  @Output() changedOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(region: string) {
    return this.changedOption.emit(region)
  }


}
