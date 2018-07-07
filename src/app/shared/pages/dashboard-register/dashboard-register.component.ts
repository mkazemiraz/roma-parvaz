import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../sevices/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-register',
  templateUrl: './dashboard-register.component.html',
  styleUrls: ['./dashboard-register.component.scss']
})
export class DashboardRegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();
    let credential = {
      'username': event.target.querySelector('#email').value,
      'password': event.target.querySelector('#password').value,
      'email': event.target.querySelector('#email').value
    };
    this.authenticationService.register(credential).then((res) =>{
      this.router.navigate(['/']);
    });
  }
}
