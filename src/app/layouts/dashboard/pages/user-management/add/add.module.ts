import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { AddRoutingModule } from './add-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    //BrowserAnimationsModule,
    MatSelectModule,
    AddRoutingModule
  ],
  declarations: [AddComponent]
})
export class AddModule { }
