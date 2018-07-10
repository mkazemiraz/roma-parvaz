import { Injectable } from '@angular/core';
import { urls } from "../../app-urls";
import { Http, Headers } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public test_token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUzMTI4NDM1N30.yt7y42f8QWuOiOudlEenqey6jjncnIz0X63sBgLYc6-M9NeXimnly0vwgvYXtIHdusgVfePDqDxavhdVMt3JEg';
  private token: string  = null;
  private urls = urls.authentication;
  private headers = new HttpHeaders().set('Authorization', this.test_token);

  constructor( private http: HttpClient ) { }

  login(data) {
    return this.http.post(this.urls.login, data).pipe(map((res: any) =>{
      // return response & response has id_token (JWT token)
      if (res && res.id_token) {
        // store JWT token in localStrorge
        localStorage.setItem('token', res.id_token);
      }
    }))
  }

  register(data){
    return this.http.post(this.urls.register, data).toPromise().then((res) => {
      return res;
    }).catch(e => {
      console.log(e);
    });
  }

  logout(){
     // remove user from local storage to log user out
     localStorage.removeItem('token');    
  }
}