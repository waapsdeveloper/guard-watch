import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderTopComponent } from './dashboard-header-top.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DashboardHeaderTopComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DashboardHeaderTopComponent
  ]
})
export class DashboardHeaderTopModule { }
