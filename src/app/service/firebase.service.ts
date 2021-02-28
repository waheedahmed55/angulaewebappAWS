import { Injectable } from '@angular/core';

import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  registrationRefrence: AngularFireList<any> = null;
  contactReference: AngularFireList<any> = null;
  loginreference: AngularFireList<any[]> = null;
  constructor(public firebaseService: AngularFirestore, public firebaseDatabase: AngularFireDatabase) {

    this.registrationRefrence = firebaseDatabase.list("Registration");
    this.contactReference = firebaseDatabase.list("ContactUserInfo");
    this.loginreference = firebaseDatabase.list("LoginUserDetail")
   }

   save(registration: any): void {
    this.registrationRefrence.push(registration);
  }
   saveContact(contact: any){
    this.contactReference.push(contact);
   }

   saveLogin(login: any){
     this.loginreference.push(login);
   }
   getLoginUserDetail(): AngularFireList<any> {
    return this.loginreference;
  }


   
    
    
  }
