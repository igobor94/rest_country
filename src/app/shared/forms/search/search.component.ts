import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  searchForm = new FormGroup({
    searchInput: new FormControl('')
  })
  
  @Output() submittedForm = new EventEmitter<Object>();

  constructor() { }

  onSubmit() {
    return this.submittedForm.emit(this.searchForm);
  }

}
