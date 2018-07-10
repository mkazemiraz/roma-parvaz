import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MerchantAcceptanceComponent } from './merchant-acceptance.component';

const routes: Routes = [
  {path: '/kazi', component: MerchantAcceptanceComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MerchantAcceptanceRoutingModule { }
