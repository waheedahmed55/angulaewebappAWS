import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/service/auth.service';
import { UserInfo } from '../dashboard/UserInfo';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})
export class UsernavComponent implements OnInit {
  public currentUser: UserInfo;
  currentUserSubscription: Subscription;
  constructor(public authService: AuthenticationService,private router: Router,) {

    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('usernav', user);
    })

   }

  ngOnInit(): void {
    
    

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

}
