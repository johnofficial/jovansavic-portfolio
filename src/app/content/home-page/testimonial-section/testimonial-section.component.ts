import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'app/shared/requests.service';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.sass']
})
export class TestimonialSectionComponent implements OnInit {

  raw_testimonials = [];
  tindex: number = 0;
  testimonials: any;

  swipping: boolean;

  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};


  constructor( private api: RequestsService) {
    this.testimonials = [];
    
    this.api.getTestimonials().subscribe(res => {
      this.raw_testimonials = res.testimonials;
      this.setTestimonial();
    })

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
    console.log(this.tindex);


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


