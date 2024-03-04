import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translator';
  home = true;
  faq = false;
  feedback = false;
  howto = false;
  contact = false;





  showHome() {
    this.home = true;
    this.faq = false;
    this.feedback = false;
    this.howto = false;
    this.contact = false;
  }
  showFeedBack() {
    this.home = false;
    this.faq = false;
    this.feedback = true;
    this.howto = false;
    this.contact = false;
  }
  showContact() {
    this.home = false;
    this.faq = false;
    this.feedback = false;
    this.howto = false;
    this.contact = true;
  }
  showFaq() {
    this.home = false;
    this.faq = true;
    this.feedback = false;
    this.howto = false;
    this.contact = false;
  }
  showHOwTo() {
    this.home = false;
    this.faq = false;
    this.feedback = false;
    this.howto = true;
    this.contact = false;
  }
}


