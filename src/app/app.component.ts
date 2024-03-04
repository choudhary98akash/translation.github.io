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
  inputText = '';
  resultText ='';
  result = false;

  sendOutput(){
    //Inject the service and handler -.baci one is prvided below
    if(this.inputText===''){
      alert('Please enter something to convert');
    }
     this.resultText = this.inputText;//apply the logic here 
    
     this.resultText === ''? this.result = false : this.result = true;
  }


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


