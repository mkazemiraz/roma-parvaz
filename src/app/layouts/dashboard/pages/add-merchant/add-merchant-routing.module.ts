import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddMerchantComponent } from './add-merchant.component';

const routes: Routes = [
  {path: '', component: AddMerchantComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class AddMerchantRoutingModule { }
