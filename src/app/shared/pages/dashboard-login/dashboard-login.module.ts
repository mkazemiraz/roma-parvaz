import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLoginComponent } from './dashboard-login.component';
import { DashboardLoginRoutingModule } from './dashboard-login-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardLoginRoutingModule
  ],
  declarations: [DashboardLoginComponent]
})
export class DashboardLoginModule { }
