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

  PostMessage(input: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
    return this.http.post(this.mailApi, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }

}

