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
      console.log(this.COUNTRIES, 'from country ts')
    })
  }

  getFindedCountries(country: Object) {
    return this.countryService.searchCountry(country).subscribe((findedCountries: Object[]) => {
      console.log('here')
      this.COUNTRIES = findedCountries
      this.onPageChange();
      this.allPages = Math.ceil(this.COUNTRIES.length / this.countriesPerPage);
    }) 
  }

  getFilteredCountries(region: string) {
    return this.countryService.filterCountries(region).subscribe((filtered: Object[] ) => {
      if(region !== 'all') {
        this.COUNTRIES = filtered
        this.onPageChange();
        this.allPages = Math.ceil(this.COUNTRIES.length / this.countriesPerPage);
      } else {
        this.getCountries()
      }
    })
  }
  onPageChange(page: number = 1): void {
    const startCountry = (page - 1) * this.countriesPerPage
    const endCountry = page * this.countriesPerPage;
    this.displayCOUNTRIES = this.COUNTRIES.slice(startCountry, endCountry);
  }










}
