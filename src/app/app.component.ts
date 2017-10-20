import { Component, OnInit } from '@angular/core';

/*Theme Services*/
import { ApplicationService } from './theme/services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public theme: string;

  constructor(
    private application: ApplicationService
  ) {
    this.application.applicationTitle = 'Pro Angular';
    this.application.themeClasses = 'blue-theme';
  }

  ngOnInit(){
    this.theme = this.application.themeClasses;
    this.application.logoImage = 'http://via.placeholder.com/50x50';
    this.application.logoHasImage = false;
  }
}
