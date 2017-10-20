import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'pro-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  protected logo_has_image: boolean = false;
  protected title: string;
  protected image: string;
  constructor(
    private application: ApplicationService
  ) {
    this.title = '';
  }

  ngOnInit() {
    if(this.application.logoHasImage){
      this.logo_has_image = this.application.logoHasImage;
      this.image = this.application.logoImage;
    }
    this.title = this.application.applicationTitle;
  }
}
