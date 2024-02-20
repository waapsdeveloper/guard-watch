import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SpaceSearchModule } from 'src/app/components/space-search/space-search.module';
import { DashboardHeaderTopModule } from './components/dashboard-header-top/dashboard-header-top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SpaceSearchModule,

    DashboardHeaderTopModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
