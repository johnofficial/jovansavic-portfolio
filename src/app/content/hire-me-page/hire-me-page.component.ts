import { Component, OnInit } from '@angular/core';
import {HireMeFormModel} from "./models/hire-me-form.model";

@Component({
  selector: 'app-hire-me-page',
  templateUrl: './hire-me-page.component.html',
  styleUrls: ['./hire-me-page.component.sass']
})
export class HireMePageComponent implements OnInit {
  textValue: string = '';
  hm_form = new HireMeFormModel('','','',null,'');
  constructor() {

  }

  ngOnInit() {
  }
  autogrow(){
    let  textArea = document.getElementById("project-desription");
    textArea.style.overflow = 'hidden';
    textArea.style.height = '30px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
  btnFun(){
    console.log(this.hm_form);
  }

}
