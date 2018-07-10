import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MerchantsService } from '../../../../shared/sevices/merchants/merchants.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.css']
})
export class EditMerchantComponent implements OnInit {
  public merchant: object;
  constructor(private activatedRoute: ActivatedRoute,
              private merchantsService: MerchantsService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
       if ('id' in params){
         this.merchantsService.getMerchant(params['id']).pipe(first()).subscribe( res => {
          this.merchant = res;
         });
       }
    });
  }

  editMerchant(event){
    event.preventDefault();

    this.merchant['email'] = event.target.querySelector('#email').value;
    this.merchant['firstName'] = event.target.querySelector('#name').value;
    this.merchant['phoneNumber'] = event.target.querySelector('#phoneNumber').value;

    this.merchantsService.updateMerchant(this.merchant).pipe(first()).subscribe((res) =>{
      this.router.navigate(['/dashboard/merchant-acceptance']);
    });
  }

}
