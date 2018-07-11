import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../sevices/authentication/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {
  public login: boolean;
  private option: FormGroup;
  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder,
             ) { }

  ngOnInit() {
    this.option = this.formBuilder.group({
      color: 'accent',
      fontSize: '17px'
    });
  }

  loginUser(event){
    event.preventDefault();
    let credential = {
      'username': event.target.querySelector('#email').value,
      'password': event.target.querySelector('#password').value,
      'rememberMe': false
    };
    this.authenticationService.login(credential).pipe(first()).subscribe( res => {
     this.router.navigate(['/']);
    });
  }
}
