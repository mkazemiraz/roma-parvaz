import { Component, OnInit } from '@angular/core';
import { MerchantsService } from '../../../../shared/sevices/merchants/merchants.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-merchant-acceptance',
  templateUrl: './merchant-acceptance.component.html',
  styleUrls: ['./merchant-acceptance.component.css']
})
export class MerchantAcceptanceComponent implements OnInit {

  private merchants: Array<object> = [];
  private selectedMerchant: object;
  constructor( private merchantService: MerchantsService,
               private router: Router) { }

  ngOnInit() {
    this.merchantService.getAllMerchants().pipe(first()).subscribe( res => {
      this.merchants = res;
    });
  }
  
  editMerchant(merchant){
    this.router.navigate(['dashboard/merchant-acceptance/edit', merchant.id]);
  }

  viewMerchant(merchant){
    this.router.navigate(['dashboard/merchant-acceptance/view', merchant.id]);
  }

  selectMerchant(merchant){
    this.selectedMerchant = merchant;
  }
  deleteMerchant(){
    this.merchantService.deleteMerchant(this.selectedMerchant['id']).pipe(first()).subscribe( res => {
      $('#delete').modal('hide');
      this.merchantService.getAllMerchants().pipe(first()).subscribe( res => {
        this.merchants = res;
      });
    });
  }
}
