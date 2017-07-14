import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title = 'Jovan Savic';
  is_open: boolean;

  closeMenu() {
    this.is_open = false;
  }
  constructor() {
    this.is_open = false;
  }

  ngOnInit() {
  }

}
