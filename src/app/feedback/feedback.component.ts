import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  email  = '';
  name = '';
  description ='';
  textInput ="Reach out to us at RamanLab@gamil.com!";

  onSubmit(){
    if( this.email === '' || this.name === '' || this.description === ''){
        alert('Fields cannot be left blank');
    }
    else{
    console.log('this has been put to form  name : ',this.name,' email ',this.email,' description ',this.description);
    }

    //a service to handle the feedback requests.///////////
  }
}
