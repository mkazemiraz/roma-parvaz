import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantAcceptanceComponent } from './merchant-acceptance.component';
import { MerchantAcceptanceRoutingModule } from './merchant-acceptance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MerchantAcceptanceRoutingModule
  ],
  declarations: [MerchantAcceptanceComponent]
})
export class MerchantAcceptanceModule { }
