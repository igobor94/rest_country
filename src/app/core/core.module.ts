import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CountryService } from './services/country.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    CountryService
  ]
})
export class CoreModule { }
