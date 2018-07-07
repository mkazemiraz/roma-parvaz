import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRegisterComponent } from './dashboard-register.component';

const routes: Routes = [
  {path: 'dashboard/register', component: DashboardRegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRegisterRoutingModule { }
