import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  { path: '', component: CountryComponent },
  { path: 'country/:area/view', component: CountryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
