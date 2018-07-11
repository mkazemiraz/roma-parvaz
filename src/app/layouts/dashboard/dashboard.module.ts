import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class DashboardModule { }
