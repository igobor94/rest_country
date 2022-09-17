import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[country-item]',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: any = {}

  constructor() { }

  ngOnInit(): void {

  }

}
