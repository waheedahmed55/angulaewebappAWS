import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import{ FirebaseService} from '../../service/firebase.service';
import { AuthenticationService } from 'src/app/service/auth.service';
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
      private firebaseService: FirebaseService,
      private authService: AuthenticationService
  ) {

  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      //this.getLoginUserDetails();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.loading = true;
    try {
      const response = await this.authService.signIn(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value        
      );
     this.authService.getuserLoginDetial().subscribe(userdata=>{
     });
      console.log('on login',response);
      
     this.router.navigate(['/dashboard']);
    this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log(error);
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
