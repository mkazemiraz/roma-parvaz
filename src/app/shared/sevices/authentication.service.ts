import { Injectable } from '@angular/core';
import { urls } from "../app-urls";
import { Http, Headers } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token  = 'kazi';
  private urls = urls.authentication;
  private headers = new HttpHeaders().set('Authorization', this.token);

  constructor( private http: HttpClient ) { }

  login(data) {
    return this.http.post(this.urls.login, data, {
      headers: this.headers
    }).toPromise().then((res) => {
      return res;
    }).catch(e => {
      console.log(e);
    });
  }

  register(data){
    return this.http.post(this.urls.register, data, {
      headers: this.headers
    }).toPromise().then((res) => {
      return res;
    }).catch(e => {
      console.log(e);
    });
  }
}
