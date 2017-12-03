import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { RequestsService } from 'app/shared/requests.service';
import { current } from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.sass']
})
export class PortfolioViewComponent implements OnInit {
  project: any;
  currentProject: any;
  constructor( public route: ActivatedRoute, public request: RequestsService , ) {
    this.route.params.subscribe( (params: Params)  => {
      this.project = this.request.getProject(params.id);
      this.currentProject = params.id;
    } );

  }

  ngOnInit() {
     console.log(this.currentProject);
  }

  goBack() {
    window.history.back();
  }
  nextProject() {
    let projects = Object.keys(this.request.project);
    let nextProject = projects.indexOf(this.currentProject) +1;
    if(projects.indexOf(this.currentProject) == projects.length -1) {
      return projects[0];
    }
    return projects[nextProject];
  }
  getPhotos() {
    return this.project.photo;
  }

}
