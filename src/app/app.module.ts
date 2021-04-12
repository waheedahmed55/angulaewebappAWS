import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

import { ContactComponent } from './components/contact/contact.component';
import { EventinfoComponent } from './components/eventinfo/eventinfo.component';
import { KhuddamComponent } from './components/khuddam/khuddam.component';
import { TabComponent } from './components/tab/tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGroupComponent } from './components/accordion/accordion-group/accordion-group.component';
import { DescriptionComponent } from './components/accordion/description/description.component';
import { ContactService } from './service/contact.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfviewerComponent } from './components/pdfviewer/pdfviewer.component';
import { AnsarComponent } from './components/ansar/ansar.component';
import { RegistrationComponent } from './components/registration/registration.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { KtabsetComponent } from './components/ktabset/ktabset.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CommonModule } from '@angular/common';
import {Amplify} from '@aws-amplify/core';
import { AuthenticationService } from './service/auth.service';
import { UsernavComponent } from './components/usernav/usernav.component';
import { AdminComponent } from './components/admin/admin.component';
import {UserModalComponent} from './components/usermodal/usermodal.component';


Amplify.configure({Auth:
  {
    region: 'us-east-2',
    userPoolId: 'us-east-2_eucJACIFc',
    userPoolWebClientId: '3q7f3pgg1shg107v206d8ov211',
    storage: sessionStorage
  }})

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SliderComponent,
    FooterComponent,
    FacilitiesComponent,
    ContactComponent,
    EventinfoComponent,
    KhuddamComponent,
    TabComponent,
    AccordionComponent,
    AccordionGroupComponent,
    DescriptionComponent,
    PdfviewerComponent,
    AnsarComponent,
    RegistrationComponent,
    KtabsetComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UsernavComponent,
    AdminComponent,
    UserModalComponent
    
  ],
  imports: [
     CommonModule,
     BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
     HttpClientModule,
    ReactiveFormsModule,
     PdfViewerModule,
     AppRoutingModule,
     NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule

  ],
  entryComponents: [ UserModalComponent],
  providers: [HttpService, ContactService,AngularFirestore,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
