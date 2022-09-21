import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-form',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  REGIONS: Array<string> = ['africa', 'americas', 'asia', 'europe', 'oceania']

  filterForm = new FormGroup({
    filterOption: new FormControl('')
  })

  @Output() changedOption = new EventEmitter<string>();

  constructor() { }

  filterChanged(region: string) {
    return this.changedOption.emit(region)
  }


}
