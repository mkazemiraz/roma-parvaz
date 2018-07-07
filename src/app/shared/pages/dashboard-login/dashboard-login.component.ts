import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../sevices/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    
  }

  loginUser(event){
    event.preventDefault();
    let credential = {
      'username': event.target.querySelector('#email').value,
      'password': event.target.querySelector('#password').value,
      'rememberMe': false
    };
    this.authenticationService.login(credential).then((res) =>{
      this.router.navigate(['/']);
    });
  }

}
