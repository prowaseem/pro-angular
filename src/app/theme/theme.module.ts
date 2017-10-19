import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopNavbarComponent,
  ],
  exports: [
    TopNavbarComponent
  ]
})
export class ThemeModule { }
