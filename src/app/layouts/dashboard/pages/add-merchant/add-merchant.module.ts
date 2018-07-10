import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMerchantComponent } from './add-merchant.component';
import { AddMerchantRoutingModule } from './add-merchant-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddMerchantRoutingModule
  ],
  declarations: [AddMerchantComponent]
})
export class AddMerchantModule { }
