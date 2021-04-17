import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private mailApi = 'https://mailthis.to/AMJOttawaEast'

  constructor(private http: HttpClient) { }

  //send contact details 
  postContactDetails(userreqBody) {
    console.log("I am in function POST");
    

    return this.http.post(
      `https://3ukwz2ga94.execute-api.us-east-2.amazonaws.com/prod/contact`,
      userreqBody
    );
  }

  }



