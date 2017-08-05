import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {
  skills = [
    {
      title: 'UI Design',
      class: 'bg-100'
    },
    {
      title: 'UX Design',
      class: 'bg-90'
    },
    {
      title: 'App Design',
      class: 'bg-90'
    },
    {
      title: 'Web Design',
      class: 'bg-100'
    },
    {
      title: 'PDF to HTML',
      class: 'bg-100'
    },
    {
      title: 'WordPress Theme Development',
      class: 'bg-80'
    },
    {
      title: 'Jekyll',
      class: 'bg-90'
    },
    {
      title: 'Git',
      class: 'bg-60'
    },
    {
      title: 'Motivation',
      class: 'bg-100'
    },
    {
      title: 'Learning',
      class: 'bg-100'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
