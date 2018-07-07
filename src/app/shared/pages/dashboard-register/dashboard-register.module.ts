import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRegisterComponent } from './dashboard-register.component';
import { DashboardRegisterRoutingModule } from './dashboard-register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRegisterRoutingModule
  ],
  declarations: [DashboardRegisterComponent]
})
export class DashboardRegisterModule { }
