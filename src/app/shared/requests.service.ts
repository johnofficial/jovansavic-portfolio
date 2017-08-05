import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestsService {
  private API_URL = 'http://localhost:8802/api';
  project: any;
  constructor( private http: Http ) {

    this.project = {
      WordPressBlogTheme: {
        title: 'WordPress blog theme',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis eros quis sem condimentum blandit. Maecenas vel ipsum ut risus feugiat consectetur vel id ante. Nullam dapibus, elit efficitur egestas elementum, augue risus lacinia magna, ut dictum magna tellus at augue. Donec venenatis risus eget purus consequat ornare. ',
        photo: [
          'assets/img/WordPressBlogTheme/Home – 1.png'
        ],
        thumbnail: 'assets/img/WordPressBlogTheme/WordPressThemeThumbnail.svg'
       },

      TimeTrackerMobileFirstApp: {
        title: 'Time Tracker Mobile First Web App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis eros quis sem condimentum blandit. Maecenas vel ipsum ut risus feugiat consectetur vel id ante. Nullam dapibus, elit efficitur egestas elementum, augue risus lacinia magna, ut dictum magna tellus at augue. Donec venenatis risus eget purus consequat ornare. ',
        photo: [
          'assets/img/TimeTracker/iPhone 5SE – 1.png',
          'assets/img/TimeTracker/iPhone 5SE – 2.png',
          'assets/img/TimeTracker/iPhone 5SE – 3.png',
          'assets/img/TimeTracker/iPhone 5SE – 4.png',
          'assets/img/TimeTracker/iPhone 5SE – 5.png',
          'assets/img/TimeTracker/iPhone 5SE – 6.png',
          'assets/img/TimeTracker/iPhone 5SE – 7.png',
          'assets/img/TimeTracker/iPhone 5SE – 8.png',
          'assets/img/TimeTracker/iPhone 5SE – 9.png',
          'assets/img/TimeTracker/iPhone 5SE – 10.png'
        ],
        thumbnail: 'assets/img/TimeTracker/TimeTrackerThumbnail.png'
       },

      WebDesignAgencyBasedInSerbia: {
        title: 'Web Design Agency based in Serbia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis eros quis sem condimentum blandit. Maecenas vel ipsum ut risus feugiat consectetur vel id ante. Nullam dapibus, elit efficitur egestas elementum, augue risus lacinia magna, ut dictum magna tellus at augue. Donec venenatis risus eget purus consequat ornare. ',
        photo: [
          'assets/img/TimeTrackerThumbnail.png'
        ],
        thumbnail: 'assets/img/WebAgencyThumbnail.svg'
       }
  }
  }
  getTestimonials() {
    return this.http.get(this.API_URL + '/testimonials').map(res => res.json())
  }
  getProject(id_project) {
    //console.log(this.project.id_project, id_project);
    return this.project[id_project];

  }
}
