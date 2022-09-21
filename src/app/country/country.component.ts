import { Component, OnInit } from '@angular/core';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  COUNTRIES: object[] = [];
  filterCOUNTRIES: object [] = [];
  displayCOUNTRIES: object [] = [];
  countriesPerPage: number = 8;
  allPages: number = 0;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
    this.countryService.testLog();
  }

  getCountries() {
    return this.countryService.getCountries().subscribe((countries: Object[]) => {
      this.COUNTRIES = countries
      this.onPageChange();
      this.allPages = Math.ceil(this.COUNTRIES.length / this.countriesPerPage);
    })
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

  onPageChange(page: number = 1): void {
    const startCountry = (page - 1) * this.countriesPerPage
    const endCountry = page * this.countriesPerPage;
    this.filterCOUNTRIES = this.COUNTRIES.slice(startCountry, endCountry);
  }










}
