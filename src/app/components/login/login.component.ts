import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import{ FirebaseService} from '../../service/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginUserDetails=[];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private firebaseService: FirebaseService
  ) {

  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.getLoginUserDetails();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if(this.loginUserDetails!=null){
    let user=  this.loginUserDetails.filter(m=>m.uname=== this.loginForm.controls.username.value && m.password===this.loginForm.controls.password.value);
if(user.length>0){
  this.router.navigate(['/dashboard']);
}
  
    
  }
}

  getLoginUserDetails() {
    this.firebaseService.getLoginUserDetail().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(loginUser => {
      this.loginUserDetails=loginUser;
    });
  }

}
