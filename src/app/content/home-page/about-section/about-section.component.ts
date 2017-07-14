import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.sass']
})
export class AboutSectionComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  about_me_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor ornare ligula, eu rutrum lacus pellentesque vel. Integer sed semper enim.';
  constructor() { }

  ngOnInit() {
  }

}
