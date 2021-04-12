import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/service/auth.service";
import { first } from "rxjs/operators";
import { UserInfo } from "./UserInfo";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  currentUser: UserInfo;
  currentUserSubscription: Subscription;
  userInfo: UserInfo  = new UserInfo();
  userDetailForm: FormGroup;
  columns = [
    "city",
    "dob",
    "email",
    "first name",
    "gender",
    "last name",
    "member Code",
    "postal code",
    "profession",
  ];
  index = [
    "city",
    "dob",
    "email",
    "first_name",
    "gender",
    "last_name",
    "memberCode",
    "postal_code",
    "profession",
  ];
  wikiList: [] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if(user && user.email){
          this.userInfo = user;
          this.userDetailForm.setValue({
            memberCode: user.memberCode,
            email: user.email,
            city: user.city,
            province: user.province,
            gender: user.gender,
            first_name: user.first_name,
            last_name: user.last_name,
            postal_code: user.postal_code,
            profession: user.profession,
            dob: user.dob,
          });
      }  
    });


  }

  updateUserDetailForm() {
    console.log(this.userDetailForm.value);
    console.log(this.userInfo.memberCode)
    this.authService.putUpdatedUserDetails(this.userInfo.memberCode,this.userDetailForm.value).subscribe(data=>{
      console.log(data);
    });
    this.userDetailForm.disable();
  }

  deleteForm() {
    
    console.log(this.userInfo.memberCode)
    this.authService.deleteUpdatedUserDetails(this.userInfo.memberCode).subscribe(data=>{
      console.log(data);
    });
    this.userDetailForm.reset();
    this.userDetailForm.disable();
  }
  enableForm() {
    this.userDetailForm.enable();
    this.userDetailForm.controls.email.disable();
    this.userDetailForm.controls.memberCode.disable();
  }
  ngOnInit() {
    setTimeout(() => this.userDetailForm.disable(), 2000);

    this.initUserDetailForm();
/*
    this.authService.getuserLoginDetial().subscribe(
      (data) => {
        this.wikiList = data;

        console.log(this.wikiList);
        this.userDetailForm.setValue({
          memberCode: data.memberCode,
          email: data.email,
          city: data.city,
          province: data.province,
          gender: data.gender,
          first_name: data.first_name,
          last_name: data.last_name,
          postal_code: data.postal_code,
          profession: data.profession,
          dob: data.dob,
        });
      },
      (error) => {
        console.log("Error", error);
      }
    );*/
  }
  initUserDetailForm(){
    this.userDetailForm = this.formBuilder.group({
      email: [this.userInfo.email, Validators.required],
      city: [this.userInfo.city, Validators.required],
      province: [this.userInfo.province, Validators.required],
      memberCode: [this.userInfo.memberCode, Validators.required],
      gender: [this.userInfo.gender, Validators.required],
      first_name: [this.userInfo.first_name, Validators.required],
      last_name: [this.userInfo.last_name, Validators.required],
      postal_code: [this.userInfo.postal_code, Validators.required],
      profession: [this.userInfo.profession, Validators.required],
      dob: [this.userInfo.dob, Validators.required],
    });
  }
  onLogOut() {
    this.authService
      .signOut()
      .then((data) => {
        console.log(data);
        console.log("You are successfully logged out");
        this.router.navigate(["/login"]);
      })
      .catch((err) => console.log(err));
  }
  mySortingFunction = (a, b) => {
    return a.key > b.key ? -1 : 1;
  };
}
