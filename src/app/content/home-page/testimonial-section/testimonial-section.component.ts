import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.sass']
})
export class TestimonialSectionComponent implements OnInit {

  testimonials = [
    {
      name:  'John Doe',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name:  'John Doe',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name:  'John Doe',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
