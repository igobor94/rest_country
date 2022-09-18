import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url: string = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Object[]> {
    return this.http.get<Array<Object>>(this.url).pipe(map((response: Object[]) => response))
  }
  

  testLog(): void {
    // console.log(this.searchCountry({searchInput: 'Poland'}).subscribe(val => console.log(val)))
  }

  searchCountry(_country: any) {
    return this.http.get<Array<Object>>(this.url).pipe(map(country => country.filter((country: any) => country.name.common.toLowerCase().includes(_country.value.searchInput.toLowerCase()))))
  }

  filterCountrySubject() {

  }

  // filterCountries() {
  //   return this.http.get<Array<Object>>(this.url).pipe(map())
  // }


}
