import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[country-item]',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: any = {}
  _id: string = '';

  constructor() { }

  ngOnInit(): void {
    this._id = this.country.idd.suffixes[0].toString();
    console.log(this._id)
  }

}
