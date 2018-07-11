import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantManagementRoutingModule } from './merchant-management-routing.module';
import { NewComponent } from './new/new.component';
import { MerchantManagementComponent } from './merchant-management.component';
import { MatButtonModule, MatButton } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MerchantManagementRoutingModule
  ],
  declarations: [NewComponent, MerchantManagementComponent]
})
export class MerchantManagementModule { }
