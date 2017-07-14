import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.sass']
})
export class TestimonialSectionComponent implements OnInit {

  raw_testimonials = [
    {
      name: 'John Doe',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name: 'Veljko Stanojevic',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    },
    {
      name: 'Jovan Savic',
      image: 'assets/img/face.png',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky.'
    }
  ];
  tindex: number = 0;
  testimonials: any;

  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};


  constructor() {
    this.testimonials = [];
    this.setTestimonial()
  }

  ngOnInit() {
  }

  setTestimonial() {
    if (screen.width < 600) {
      this.testimonials.push(this.raw_testimonials[0]);
    }
    else {
      this.testimonials = this.raw_testimonials;
    }
  }

  pushTestemonial() {
    this.testimonials.push(this.raw_testimonials[this.tindex]);
  }

  swipeChangeTestemonial(type) {
    if (screen.width > 600) {
      return
    }
    console.log(this.tindex);


    if (type == 'swipeleft') {
      if (!(this.tindex == (this.raw_testimonials.length - 1))) {
        this.testimonials = [];
        this.tindex += 1;
        this.pushTestemonial()
      }
      else {
        this.testimonials = [];
        this.tindex = 0;
        this.pushTestemonial()
      }
    }

    if (type == 'swiperight') {
      if (!(this.tindex == 0)) {
        this.testimonials = [];
        this.tindex -= 1;
        this.pushTestemonial()
      }
      else {
        this.testimonials = [];
        this.tindex = this.raw_testimonials.length - 1;
        this.pushTestemonial()
      }
    }
    }
  }


