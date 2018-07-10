import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../shared/sevices/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  addMerchant(event){
    event.preventDefault();
    let credential = {
      'firstName': event.target.querySelector('#name').value,
      'phoneNumber': event.target.querySelector('#phoneNumber').value,
      'email': event.target.querySelector('#email').value
    };
    this.authenticationService.register(credential).then((res) =>{
      this.router.navigate(['/dashboard/merchant-acceptance']);
    });
  }
}
