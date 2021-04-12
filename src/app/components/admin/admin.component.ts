import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/service/auth.service';
import { UserInfo } from '../dashboard/UserInfo';
import { UserModalComponent } from '../usermodal/usermodal.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userList: UserInfo[] = [];


  constructor(public authService: AuthenticationService,config: NgbModalConfig, private _modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit(): void {
  }
  getRecords(){
    

    this.authService.getallUserDetails().subscribe(
      (data) => {
        this.userList = data;
        console.log(data);
        
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

  editUser(user){
    const modalRef = this._modalService.open(UserModalComponent);

    modalRef.result.then(() => { console.log('When user closes'); }, () => { 
      this.getRecords();
      console.log('Backdrop click')})


    modalRef.componentInstance.userInfo = user;
    console.log(user);
  }
  deleteUser(user){
    this.authService.deleteUpdatedUserDetails(user.memberCode).subscribe(data=>{
      console.log(data);
      this.getRecords();
    });
    

  }
}
