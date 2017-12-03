import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'app/shared/requests.service';


@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.sass']
})
export class PortfolioPageComponent implements OnInit {

  constructor( public request: RequestsService ) { }

  ngOnInit() {
    console.log(this.getProjectsList());
  }
  getProjectsList() {
    return Object.keys(this.request.project);
  }


}
