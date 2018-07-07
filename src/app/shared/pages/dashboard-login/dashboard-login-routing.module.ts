import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLoginComponent } from './dashboard-login.component';

const routes: Routes = [
  {path: 'dashboard/login', component:DashboardLoginComponent}
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
export class DashboardLoginRoutingModule { }
