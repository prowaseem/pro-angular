import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'pro-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  public title: string;
  constructor(
    private application: ApplicationService
  ) { }

  ngOnInit() {
    this.title = this.application.applicationTitle;
  }

}
