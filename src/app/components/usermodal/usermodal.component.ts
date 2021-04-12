import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../dashboard/UserInfo';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/service/auth.service';


@Component({
  selector: 'ngbd-modal-usermodal',
  templateUrl: './usermodal.component.html'
})
export class UserModalComponent implements OnInit {
    userForm: FormGroup;
    loading = false;
    submitted = false;
    userInfo: UserInfo;
    
    

    constructor( private formBuilder: FormBuilder, public modal:NgbActiveModal, public authService: AuthenticationService) {
        
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
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
        console.log(this.userInfo);
        this.userForm.setValue({
            memberCode: this.userInfo.memberCode,
            email: this.userInfo.email,
            city: this.userInfo.city,
            province: this.userInfo.province,
            gender: this.userInfo.gender,
            first_name: this.userInfo.first_name,
            last_name: this.userInfo.last_name,
            postal_code: this.userInfo.postal_code,
            profession: this.userInfo.profession,
            dob: this.userInfo.dob,
          });
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        this.authService.putUpdatedUserDetails(this.userInfo.memberCode,this.userForm.value).subscribe(data=>{
            
            setTimeout(()=>{                         
                this.submitted=false;
           }, 3000);
          
            console.log(data);
          });

       
    }
}
