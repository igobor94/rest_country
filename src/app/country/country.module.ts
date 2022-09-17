import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryItemComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
