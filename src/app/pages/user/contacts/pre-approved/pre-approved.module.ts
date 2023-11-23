import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApprovedPageRoutingModule } from './pre-approved-routing.module';

import { PreApprovedPage } from './pre-approved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreApprovedPageRoutingModule
  ],
  declarations: [PreApprovedPage]
})
export class PreApprovedPageModule {}
