import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogPipe } from './log/log.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogPipe
  ]
})
export class SharedModule { }
