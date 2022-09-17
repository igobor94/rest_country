import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Array<Object>>(this.url)
  }

  
}
