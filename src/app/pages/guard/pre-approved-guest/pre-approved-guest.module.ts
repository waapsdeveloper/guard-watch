import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApprovedGuestPageRoutingModule } from './pre-approved-guest-routing.module';

import { PreApprovedGuestPage } from './pre-approved-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreApprovedGuestPageRoutingModule
  ],
  declarations: [PreApprovedGuestPage]
})
export class PreApprovedGuestPageModule {}
