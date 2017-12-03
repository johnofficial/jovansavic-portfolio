import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestsService {
  private API_URL = 'http://localhost:8802/api';
  project: any;
  constructor( private http: Http ) {

    this.project = {
      TimeTrackerMobileFirstApp: {
        title: 'Time Tracking App',
        description: 'Ionic application for tracking time. Users have the option to create tasks and projects with multiple tasks. Every task can be tracked and user can add some notes.',
        roles: ['UI Design', 'UX Design', 'Front-End Development'],
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
          'assets/img/TimeTracker/iPhone 5SE – 10.png',
          'assets/img/TimeTracker/iPhone 5SE – 11.png',
          'assets/img/TimeTracker/iPhone 5SE – 12.png',
          'assets/img/TimeTracker/iPhone 5SE – 13.png'
        ],
        thumbnail: 'assets/img/TimeTracker/TimeTrackerThumbnail.svg'
      },
      MSWoodShop: {
        title: 'WooCommerce Pellet Store',
        description: 'WooCommerce site/theme for pellet. Client wanted to have e-commerce site mainly for selling pellet, and for wood processing services.',
        roles: ['UI Design', 'UX Design', 'Full-Stack Development', 'WooCommerce Theme Development'],
        photo: [
          'assets/img/MSWoodShop/MSWoodShopThumb.svg',
          'assets/img/MSWoodShop/Web 1280 – 1.svg',
          'assets/img/MSWoodShop/Web 1280 – 2.svg',
          'assets/img/MSWoodShop/Web 1280 – 3.svg',
          'assets/img/MSWoodShop/Web 1280 – 4.svg',
          'assets/img/MSWoodShop/Web 1280 – 5.svg',
          'assets/img/MSWoodShop/Web 1280 – 6.svg'
        ],
        thumbnail: 'assets/img/MSWoodShop/MSWoodShopThumb.svg'
      },
      TimeTrackerWeb: {
        title: 'Landing Page for Time Tracker',
        link: ['https://johnofficial.github.io/beproductive-site/'],
        description: 'Landing page for Be Productive app.',
        roles: ['UI Design', 'UX Design', 'Front-End Development'],
        photo: [
          'assets/img/TimeTrackerWeb/Web 1280 – 1.svg',
          'assets/img/TimeTrackerWeb/iPhone 67 – 1.svg'
        ],
        thumbnail: 'assets/img/TimeTrackerWeb/TimeTrackerWebThumb.svg'
      },
      WordPressBlogTheme: {
        title: 'WordPress blog theme',
        description: 'This is my personal project. I want to make the theme for commercial use.',
        roles: ['UI Design', 'UX Design', 'Full-Stack Development', 'WordPress Theme Development'],
        photo: [
          'assets/img/WordPressBlogTheme/1a.svg',
          'assets/img/WordPressBlogTheme/1.svg',
          'assets/img/WordPressBlogTheme/2.svg',
          'assets/img/WordPressBlogTheme/3.svg',
          'assets/img/WordPressBlogTheme/4.svg',
          'assets/img/WordPressBlogTheme/5.svg',
          'assets/img/WordPressBlogTheme/6.svg',
          'assets/img/WordPressBlogTheme/7.svg',
          'assets/img/WordPressBlogTheme/8.svg'
        ],
        thumbnail: 'assets/img/WordPressBlogTheme/WordPressThemeThumbnail.svg'
       },
      WebDesignAgencyBasedInSerbia: {
        title: 'Branding Agency based in Serbia',
        link: ['https://novis.rs/'],
        description: 'Site for a group of friends that start to work with branding in Serbia.',
        roles: ['UI Design', 'UX Design', 'Front-End Development', 'Jekyll'],
        photo: [
          'assets/img/WebAgency/Web 1280 – 1.svg',
          'assets/img/WebAgency/iPhone 5SE – 1.svg'
        ],
        thumbnail: 'assets/img/WebAgency/WebAgencyThumbnail.svg'
       },
      OneBit: {
        title: 'One Page site for OneBit Animation',
        description: 'Site for client who makes 2D and 3D animations.',
        roles: ['UI Design', 'Front-End Development'],
        photo: [
          'assets/img/OneBit/OneBitThumb.svg'
        ],
        thumbnail: 'assets/img/OneBit/OneBitThumb.svg'
      },
      MSWoodCS: {
        title: 'Coming Soon for MS Wood Shop',
        link: ['https://johnofficial.github.io/cooming-soon/'],
        description: 'Coming soon page for MS Wood e-commerce site that I work on.',
        roles: ['UI Design', 'Front-End Development'],
        photo: [
          'assets/img/MSWoodCS/MSWoodCSThumb.svg'
        ],
        thumbnail: 'assets/img/MSWoodCS/MSWoodCSThumb.svg'
      },
      ITDistrict: {
        title: 'Site for StartUp',
        link: ['http://www.itdistrict.org/'],
        description: 'The site for a startup that works on Internet Technologies.',
        roles: ['UI Design', 'UX Design', 'Front-End Development', 'Jekyll'],
        photo: [
          'assets/img/ITDistrict/1.png',
          'assets/img/ITDistrict/2.png',
          'assets/img/ITDistrict/3.png',
          'assets/img/ITDistrict/4.png'
        ],
        thumbnail: 'assets/img/ITDistrict/ITDistrictThumb.svg'
      },
      FitnesCentar24: {
        link: ['https://fitnescentar24.rs/'],
        title: 'Site for Fitness Center',
        description: 'The site for the fitness center. The client wanted to present his gym on the internet and that users can make an online reservation for fitness consultation.',
        roles: ['UI Design', 'UX Design', 'Front-End Development', 'Jekyll', 'PHP'],
        photo: [
          'assets/img/FitnesCentar24/1.svg',
          'assets/img/FitnesCentar24/2.svg',
          'assets/img/FitnesCentar24/3.svg',
          'assets/img/FitnesCentar24/4.svg',
          'assets/img/FitnesCentar24/5.svg',
          'assets/img/FitnesCentar24/6.svg'
        ],
        thumbnail: 'assets/img/FitnesCentar24/FitnesCentar24Thumb.svg'
      }
  }
  }
  getTestimonials() {
    return this.http.get(this.API_URL + '/testimonials').map(res => res.json())
  }
  getProject(id_project) {
    /*console.log(this.project.id_project, id_project);*/
    return this.project[id_project];
  }
  getCategories(id_project) {
    /*console.log(this.project.id_project, id_project);*/
    return this.project[id_project].categories;

  }
}
