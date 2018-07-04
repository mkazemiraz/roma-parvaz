import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutsComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
