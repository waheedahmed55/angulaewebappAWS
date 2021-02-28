import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import{ FirebaseService} from '../../service/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loginRegistartion= new LoginRegistration();
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private firebaseService: FirebaseService,
  ) { 
     
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          memCode: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(data) {
    this.submitted = true;
    console.log(this.registerForm.controls.firstName.value);
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
        return;
    } 
this.loginRegistartion.memCode = this.registerForm.controls.memCode.value;
this.loginRegistartion.fname = this.registerForm.controls.firstName.value;
this.loginRegistartion.lname = this.registerForm.controls.lastName.value;
this.loginRegistartion.uname = this.registerForm.controls.username.value;
this.loginRegistartion.password = this.registerForm.controls.password.value;

console.log(this.loginRegistartion);
    this.firebaseService.saveLogin(this.loginRegistartion);
    this.router.navigate(['/login']);

  }


}
export class LoginRegistration{
  memCode :string;
  fname :string;
  lname :string;
  uname :string;
  password :string;
}