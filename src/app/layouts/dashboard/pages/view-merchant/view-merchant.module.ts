import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMerchantComponent } from './view-merchant.component';
import { ViewMerchantRoutingModule } from './view-merchant-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ViewMerchantRoutingModule
  ],
  declarations: [ViewMerchantComponent]
})
export class ViewMerchantModule { }
