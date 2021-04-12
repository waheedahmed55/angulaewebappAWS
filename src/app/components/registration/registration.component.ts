import { Component, OnInit } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactService } from 'src/app/service/contact.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {FirebaseService} from 'src/app/service/firebase.service';
import { AuthenticationService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isProfesionselectedOthers = false;
  registration:Registration = new Registration();

  FormData: FormGroup;
  constructor(public authService: AuthenticationService, private builder: FormBuilder, private contact: ContactService, private firebasedb:FirebaseService) {
//     this.registration.fname = '';
// this.registration.lname ='';
// this.registration.dob = '';
// this.registration.email ='';
// this.registration.mobile = '';
// this.registration.gender = '';
// this.registration.memcode = '';
// this.registration.city = '';
// this.registration.province = '';
// this.registration.postcode = '';
// this.registration.profession = '';
   }

  ngOnInit() {
    this.registerForm = this.builder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(12)]],   
      gender: ['', [Validators.required]], 
      memcode: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postcode: ['', Validators.required],
      profession: ['', [Validators.required]]            
  });

  }
  get myForm() {
    return this.registerForm.get('gender');
  }

  get profession() {
    return this.registerForm.get('profession');
  }

  get f() { return this.registerForm.controls; }

  onSubmit(data) {
    this.submitted = true;
    console.log(this.registerForm.controls.fname.value);
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
        return;
    } 

this.registration.first_name = this.registerForm.controls.fname.value;
this.registration.last_name = this.registerForm.controls.lname.value;
this.registration.dob = this.registerForm.controls.dob.value;
this.registration.email = this.registerForm.controls.email.value;
this.registration.mobile = this.registerForm.controls.mobile.value;
this.registration.gender = this.registerForm.controls.gender.value;
this.registration.memberCode = this.registerForm.controls.memcode.value;
this.registration.city = this.registerForm.controls.city.value;
this.registration.province = this.registerForm.controls.province.value;
this.registration.postal_code = this.registerForm.controls.postcode.value;
this.registration.profession = this.registerForm.controls.profession.value;
console.log("this is me",this.registration);
    this.firebasedb.save(this.registration);

    this.authService.postUserDetails(this.registration).subscribe(data=>{
      console.log(data);
    });

  }


  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  showProfession(){
    this.isProfesionselectedOthers = false;
    const data =this.registerForm.get('profession');
   if(data.value === 'Others'){
     this.isProfesionselectedOthers = true;
   }
  }

}


export class Registration{
  first_name :string;
  last_name :string;
  dob :string;
  email :string;
  mobile :string;
  gender :string;
  memberCode :string;
  city :string;
  province :string;
  postal_code :string;
  profession :string;
}
