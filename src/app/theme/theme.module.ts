import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';

/* Services */
import { ApplicationService } from './services/application.service';

/* Components */
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IconComponent } from './components/icon/icon.component';




@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    TopNavbarComponent,
    LogoComponent,
    ProfileComponent,
    IconComponent,
  ],
  exports: [
    TopNavbarComponent,
    LogoComponent,
    ProfileComponent
  ],
  providers: [
    ApplicationService
  ]
})
export class ThemeModule { }
