import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogPipe } from './log/log.pipe';
import { SearchComponent } from './forms/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './forms/filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LogPipe,
    FilterComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    LogPipe,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
