import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../shared/sevices/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  onLogout(){
    this.authenticationService.logout();
  }

}
