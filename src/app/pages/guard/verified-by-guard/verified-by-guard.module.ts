import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiedByGuardPageRoutingModule } from './verified-by-guard-routing.module';

import { VerifiedByGuardPage } from './verified-by-guard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiedByGuardPageRoutingModule
  ],
  declarations: [VerifiedByGuardPage]
})
export class VerifiedByGuardPageModule {}
