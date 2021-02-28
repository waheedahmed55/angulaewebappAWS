import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitiesComponent} from './components/facilities/facilities.component';
import {KhuddamComponent} from './components/khuddam/khuddam.component';
import {EventinfoComponent} from './components/eventinfo/eventinfo.component';
import {ContentComponent} from './components/content/content.component';
import {ContactComponent} from './components/contact/contact.component';
import {AnsarComponent} from './components/ansar/ansar.component';
import{RegistrationComponent} from './components/registration/registration.component';
import{SignupComponent} from './components/signup/signup.component';
import{LoginComponent} from './components/login/login.component';
import{DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: ContentComponent, pathMatch: 'full'},
  {path: 'facility', component:FacilitiesComponent, pathMatch:'full'},
   {path: 'khuddam', component:KhuddamComponent, pathMatch:'full'},
   {path: 'ansar', component:AnsarComponent, pathMatch:'full'},
   {path: 'eventinfo', component:EventinfoComponent, pathMatch:'full'},
   {path: 'contact', component:ContactComponent, pathMatch:'full'},
   {path: 'registration', component:RegistrationComponent, pathMatch:'full'},
   {path: 'signup',component:SignupComponent, pathMatch: 'full'},
   {path: 'login',component:LoginComponent, pathMatch: 'full'},
   {path: 'dashboard',component:DashboardComponent, pathMatch: 'full'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
