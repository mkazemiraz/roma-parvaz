import { Injectable } from '@angular/core';
import { urls } from "../../app-urls";
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {
  private urls = urls.merchants;
  constructor( private http: HttpClient,
               private authenticationService: AuthenticationService) { }

  private headers = new HttpHeaders().set('Authorization', this.authenticationService.test_token);
  getAllMerchants() {
    return this.http.get(this.urls.merchants).pipe(map((res: any) =>{
      return res;
    }))
  }

  getMerchant(id: number){
    let url = this.urls.merchants + '/' + id;
    return this.http.get(url, {headers: this.headers}).pipe(map((res: any) =>{
      return res;
    }))
  }


  updateMerchant(merchant) {
    return this.http.put(this.urls.merchants, merchant).pipe(map((res: any) =>{
      return res;
    }))
  }

  deleteMerchant(id: number){
    let url = this.urls.merchants + '/' + id;
    return this.http.delete(url, {headers: this.headers}).pipe(map((res: any) =>{
      return res;
    }))
  }
}
