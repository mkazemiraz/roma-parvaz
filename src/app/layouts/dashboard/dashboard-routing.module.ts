import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent, loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'merchant-acceptance', component: DashboardComponent, loadChildren: './pages/merchant-acceptance/merchant-acceptance.module#MerchantAcceptanceModule'
  },
  {
    path: 'merchant-acceptance/add', component: DashboardComponent, loadChildren: './pages/add-merchant/add-merchant.module#AddMerchantModule'
  },
  {
    path: 'merchant-acceptance/edit/:id', component: DashboardComponent, loadChildren: './pages/edit-merchant/edit-merchant.module#EditMerchantModule'
  },
  {
    path: 'merchant-acceptance/view/:id', component: DashboardComponent, loadChildren: './pages/view-merchant/view-merchant.module#ViewMerchantModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
