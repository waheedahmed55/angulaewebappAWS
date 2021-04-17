import { Component, OnInit } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactService } from 'src/app/service/contact.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {FirebaseService} from 'src/app/service/firebase.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  FormData: FormGroup;
  contactDetails: UserConact = new UserConact();
  alert:Alert;
  constructor(private builder: FormBuilder, private contact: ContactService, private firebasesvc:FirebaseService) { 
  
  }


  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobile: new FormControl('', [Validators.required]),
       subject: new FormControl('', [Validators.required]),
       message: new FormControl('', [Validators.required])
    });
  }
  get validate() { return this.FormData.controls; }

  onSubmit(FormData) {
    console.log(FormData)
    this.contactDetails.name = this.FormData.controls.name.value;
    this.contactDetails.email = this.FormData.controls.email.value;
    this.contactDetails.mobile = this.FormData.controls.mobile.value;
    this.contactDetails.subject = this.FormData.controls.subject.value;
    this.contactDetails.message = this.FormData.controls.message.value;
    
    this.contact.postContactDetails(this.contactDetails).subscribe(data=>{
      console.log(data);
      this.FormData.reset();
      this.alert = {"type":"success","message":"The message was sent sucessfully to Admin"}; 
      setTimeout(() => this.close(alert), 10000);

    });
  //  console.log("Form is Submitted");
    
    //console.log("Form is Reset"); 
  }
  close(alert){
   // console.log("alert in close");
    this.alert = null;

  }
  

}
export class UserConact{
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}
interface Alert {
  type: string;
  message: string;
}
