import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MerchantsService } from '../../../../shared/sevices/merchants/merchants.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.css']
})
export class ViewMerchantComponent implements OnInit {
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

  editMerchant(){
    this.router.navigate(['dashboard/merchant-acceptance/edit', this.merchant['id']]);
  }
}
