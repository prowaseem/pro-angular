import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pro-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input('type') type: string;
  @Input('icon') icon: string;

  constructor() { }

  ngOnInit() {

  }

}
