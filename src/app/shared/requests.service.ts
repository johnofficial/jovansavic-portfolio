import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestsService {
  private API_URL = 'http://localhost:8802/api';
  constructor( private http: Http ) {

  }
  getTestimonials() {
    return this.http.get(this.API_URL + '/testimonials').map(res => res.json())
  }
}
