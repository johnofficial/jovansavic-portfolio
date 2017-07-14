import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.sass']
})
export class TestimonialSectionComponent implements OnInit {

  raw_testimonials = [
    {
      name:  'John Doe',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name:  'Veljko Stanojevic',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name:  'Jovan Savic',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    }
  ];
  tindex: number = 0;
  testimonials: any;



  constructor() {
    this.testimonials = [];
    this.selectTestemonials()
  }

  ngOnInit() {
  }


  selectTestemonials() {
    if (screen.width < 600) {
      this.testimonials = [];
      this.testimonials.push(this.raw_testimonials[this.tindex]);
    }
    else {
      this.testimonials = this.raw_testimonials;
    }
  }

  changeTestemonial() {
    if (screen.width < 600) {
      if (!(this.tindex == (this.raw_testimonials.length - 1))) {
        this.tindex += 1;
        this.selectTestemonials();
      }
      else {
        this.tindex = -1;
        this.changeTestemonial();
      }

    }
  }



}
