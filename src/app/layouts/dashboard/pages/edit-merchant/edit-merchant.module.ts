import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMerchantComponent } from './edit-merchant.component';
import { EditMerchantRoutingModule } from './edit-merchant-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditMerchantRoutingModule
  ],
  declarations: [EditMerchantComponent]
})
export class EditMerchantModule { }
