import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { FirebaseService } from "../../service/firebase.service";
import { AuthenticationService } from "src/app/service/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loginRegistartion = new LoginRegistration();
  loading = false;
  submitted = false;
  showVerificationInput = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      memCode: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      verificationCode: [""],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.controls.firstName.value);
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      return;
    }
    // this.loginRegistartion.memCode = this.registerForm.controls.memCode.value;
    // this.loginRegistartion.fname = this.registerForm.controls.firstName.value;
    // this.loginRegistartion.lname = this.registerForm.controls.lastName.value;
    // this.loginRegistartion.uname = this.registerForm.controls.username.value;
    // this.loginRegistartion.password = this.registerForm.controls.password.value;

    // console.log(this.loginRegistartion);
    if (!this.showVerificationInput) {
      try {
        const response = await this.authService.signUp(
          this.registerForm.controls.username.value,
          this.registerForm.controls.password.value,
          this.registerForm.controls.firstName.value,
          this.registerForm.controls.lastName.value,
          this.registerForm.controls.memCode.value
        );
        console.log(response);

        this.showVerificationInput = true;
      } catch (error) {
        console.log(error);
      }
    }
    else  {
      try {
        const response = await this.authService.confirmSignUp(
          this.registerForm.controls.username.value,
          this.registerForm.controls.verificationCode.value
        );
        console.log(response);
        this.router.navigate(["/login"]);
      } catch (error) {
        console.log(error);
      }
    }

    //this.firebaseService.saveLogin(this.loginRegistartion);
    
  }
}
export class LoginRegistration {
  memCode: string;
  fname: string;
  lname: string;
  uname: string;
  password: string;
}
