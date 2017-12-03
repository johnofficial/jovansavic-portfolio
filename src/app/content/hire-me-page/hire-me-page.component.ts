import { Component, OnInit } from '@angular/core';
import { HireMeFormModel } from './models/hire-me-form.model';
import { HireMePageService, IMessage} from './service/hire-me-page.service';


@Component({
  selector: 'app-hire-me-page',
  templateUrl: './hire-me-page.component.html',
  styleUrls: ['./hire-me-page.component.sass']
})
export class HireMePageComponent implements OnInit {
  textValue = '';
  message = new HireMeFormModel('', '', '', null, '');
  // message: IMessage = {};

  constructor(private hireService: HireMePageService) {

  }
  sendEmail(message: IMessage) {
    this.hireService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
  }
  autogrow() {
    let  textArea = document.getElementById("project-desription");
    textArea.style.overflow = 'hidden';
    textArea.style.height = '30px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

}
