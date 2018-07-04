import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  declarations: [LayoutsComponent]
})
export class LayoutsModule { }
