import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    TopNavbarComponent,
  ],
  exports: [
    TopNavbarComponent
  ]
})
export class ThemeModule { }
