import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { MerchantManagementComponent } from './merchant-management.component';

const routes: Routes = [
  { path: '', component: MerchantManagementComponent},
  { path: 'new', component: NewComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MerchantManagementRoutingModule { }
