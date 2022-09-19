import { Component, OnInit } from '@angular/core';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  COUNTRIES: object[] = []
  filterCOUNTRIES: object [] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
    this.countryService.testLog();
  }

  getCountries() {
    return this.countryService.getCountries().subscribe(response => this.COUNTRIES = [...this.COUNTRIES, ...response])
  }

  getFindedCountries(country: Object) {
    return this.countryService.searchCountry(country).subscribe(finded => this.filterCOUNTRIES = [...finded]) 
  }

  getFilteredCountries(region: string) {
    this.filterCOUNTRIES = [];
    return this.countryService.filterCountries(region).subscribe(filtered => (region === 'all') ? this.COUNTRIES : this.filterCOUNTRIES = [...filtered])
  }

  getClear() {
    return this.countryService.getCountries
  }










}
