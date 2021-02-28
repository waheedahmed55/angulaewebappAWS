import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };   


  constructor(private httpCoreService:HttpClient) { }

   Get(url:string):Observable<any>{
    return this.httpCoreService.get(url);
  }

   Post(url:string,data:any):Observable<any>{
    return this.httpCoreService.post(url,data,this.httpOptions);
  }

   Put(url:string,data:any):Observable<any>{
    return this.httpCoreService.put(url,data);
  }

   Delete(url:string):Observable<any>{
    return this.httpCoreService.delete(url);
  }

}
