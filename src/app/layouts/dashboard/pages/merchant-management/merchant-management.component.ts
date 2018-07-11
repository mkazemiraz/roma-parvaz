import { Component, OnInit } from '@angular/core';
import { MerchantsService } from '../../../../shared/sevices/merchants/merchants.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-merchant-management',
  templateUrl: './merchant-management.component.html',
  styleUrls: ['./merchant-management.component.css']
})
export class MerchantManagementComponent implements OnInit {
  private merchants: Array<object> = [];
  constructor( private merchantService: MerchantsService,
               private Router: Router) { }

  ngOnInit() {
    this.merchantService.getAllMerchants().pipe(first()).subscribe( res => {
      this.merchants = res;
    });
  }

}
