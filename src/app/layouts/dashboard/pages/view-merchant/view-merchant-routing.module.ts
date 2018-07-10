import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ViewMerchantComponent } from './view-merchant.component';

const routes: Routes = [
  {path: '', component: ViewMerchantComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class ViewMerchantRoutingModule { }
