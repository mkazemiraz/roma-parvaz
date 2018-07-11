import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../sevices/authentication/authentication.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard-register',
  templateUrl: './dashboard-register.component.html',
  styleUrls: ['./dashboard-register.component.scss']
})
export class DashboardRegisterComponent implements OnInit {
  private option: FormGroup;
  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.option = this.formBuilder.group({
      color: 'accent',
      fontSize: '17px'
    });
  }

  registerUser(event) {
    event.preventDefault();
    let credential = {
      'firstName': event.target.querySelector('#name').value,
      'phoneNumber': event.target.querySelector('#phoneNumber').value,
      'email': event.target.querySelector('#email').value
    };
    this.authenticationService.register(credential).then((res) =>{
      this.router.navigate(['/']);
    });
  }
}
