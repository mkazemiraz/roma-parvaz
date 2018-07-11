import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLoginComponent } from './dashboard-login.component';
import { DashboardLoginRoutingModule } from './dashboard-login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {BidiModule} from '@angular/cdk/bidi';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    DashboardLoginRoutingModule
  ],
  declarations: [DashboardLoginComponent],
  providers: [FormBuilder]
})
export class DashboardLoginModule { }
