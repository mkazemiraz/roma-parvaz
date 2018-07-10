import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../shared/sevices/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public login: boolean;
  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    // this.login = this.authenticationService.checkAuthorized();
    // if(!this.login) {
    //   this.router.navigate(['/dashboard/login']);
    // }
  }

}
