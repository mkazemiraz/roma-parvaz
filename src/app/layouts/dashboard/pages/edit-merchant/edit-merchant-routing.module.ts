import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { EditMerchantComponent } from './edit-merchant.component';

const routes: Routes = [
  {path: '', component: EditMerchantComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class EditMerchantRoutingModule { }
