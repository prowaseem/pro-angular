import { Component } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // console.log(jQuery());
    // console.log(jquery);
  }
}
