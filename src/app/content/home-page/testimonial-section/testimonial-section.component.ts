import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'app/shared/requests.service';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.sass']
})
export class TestimonialSectionComponent implements OnInit {

  testimonials: any;
  raw_testimonials = [
    {
      name: 'Aleksa Stevic',
      title: 'Marketing Manager',
      description: 'It’s great to work with Jovan, every second spent in work with him is like a gift from the sky. ',
      image: 'assets/img/stevic.jpeg'
    },
    {
      name: 'Veljko Stanojevic',
      title: 'Python Developer',
      description: 'Excellent and creative UI/UX designer. It\'s great to work with him.',
      image: 'assets/img/veljko.jpg'
    },
    {
      name: 'Nikola Mihajlovic',
      title: 'Java Developer',
      description: 'I\'m glad he takes care of the details and makes great efforts to reach the desired goal.',
      image: 'assets/img/miha.jpg'
    }
  ];

  tindex: number = 0;

  swipping: boolean;

  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};


  constructor( private api: RequestsService) {

    this.testimonials = [];
    this.setTestimonial();
/*
    this.api.getTestimonials().subscribe(res => {
      this.raw_testimonials = res.testimonials;
      this.setTestimonial();
    })*/

  }

  ngOnInit() {
  }

  setTestimonial() {
    if (screen.width < 600) {
      this.swipping = true;
      this.testimonials.push(this.raw_testimonials[0]);
    }
    else {
      this.testimonials = this.raw_testimonials;
    }
  }

  pushTestemonial() {
    this.testimonials = [];
    this.testimonials.push(this.raw_testimonials[this.tindex]);
  }

  swipeChangeTestemonial(type) {
    if (screen.width > 600) {
      return
    }


    if (type == 'swipeleft') {
      if (!(this.tindex == (this.raw_testimonials.length - 1))) {
        this.tindex += 1;
        this.pushTestemonial()
      }
      else {
        this.tindex = 0;
        this.pushTestemonial()
      }
    }

    if (type == 'swiperight') {
      if (!(this.tindex == 0)) {
        this.tindex -= 1;
        this.pushTestemonial()
      }
      else {
        this.tindex = this.raw_testimonials.length - 1;
        this.pushTestemonial()
      }
    }
    }

    getIndexes() {
      let list = [];

      for (let _i = 0; _i < this.raw_testimonials.length; _i++) {
        list.push(_i)
      }
      return list
    }
}


