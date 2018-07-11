import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRegisterComponent } from './dashboard-register.component';
import { DashboardRegisterRoutingModule } from './dashboard-register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DashboardRegisterRoutingModule
  ],
  declarations: [DashboardRegisterComponent]
})
export class DashboardRegisterModule { }
