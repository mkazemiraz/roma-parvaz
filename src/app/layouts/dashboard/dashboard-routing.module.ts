import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent, loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'merchant-acceptance', component: DashboardComponent, loadChildren: './pages/merchant-acceptance/merchant-acceptance.module#MerchantAcceptanceModule'
  },
  {
    path: 'merchant', component: DashboardComponent, loadChildren: './pages/merchant-acceptance/merchant-acceptance.module#MerchantAcceptanceModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
