import { Injectable } from '@angular/core';

import { urls } from "../../app-urls";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urls = urls.users;
  private headers = new HttpHeaders().set('Authorization', 'Bearer '+ localStorage.getItem('token'));
 //private headers = new HttpHeaders().set('Authorization', this.authenticationService.test_token);
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  getAllUsers(){
    return this.http.get(this.urls.users, {headers: this.headers}).pipe(map((res: any) =>{
      return res;
    }))
  }

  updateUser(user){
    return this.http.put(this.urls.users, user, {headers: this.headers}).pipe(map((res: any) =>{
      return res;
    }))
  }
}
