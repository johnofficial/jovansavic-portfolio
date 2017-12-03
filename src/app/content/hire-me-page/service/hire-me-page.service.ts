import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string,
  mail?: string,
  project_description?: string,
  project_name?: string,
  project_budget?: string
}

@Injectable()
export class HireMePageService {
  private emailUrl = 'http://jovansavic.novis.rs/assets/email.php';

  constructor(private http: Http) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        const myMessage = <HTMLElement> document.querySelector('.status-alert');
        myMessage.className += ' success ';
        myMessage.innerHTML = 'Message sent successfully!';

        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        const myMessage = <HTMLElement> document.querySelector('.status-alert');
        myMessage.className += ' error ';
        myMessage.innerHTML = 'The message was not able to send!';
        return Observable.throw(error)
      })
  }
}
