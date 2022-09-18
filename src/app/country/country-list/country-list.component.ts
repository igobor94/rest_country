import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[country-list]',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  
  @Input() countries: Array<Object> = []

  constructor() { }

}
