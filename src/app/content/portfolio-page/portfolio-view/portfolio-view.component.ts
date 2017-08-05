import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { RequestsService } from 'app/shared/requests.service';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.sass']
})
export class PortfolioViewComponent implements OnInit {
  project: any;
  constructor( private route: ActivatedRoute, private request: RequestsService ) {
    this.route.params.subscribe( (params: Params ) => {
      this.project = this.request.getProject(params.id);
    } );
  }

  ngOnInit() {
    this.getPhotos();
  }
  goBack(){
    window.history.back();
  }
  getPhotos(){
    return this.project.photo;
  }


}
