import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiedByGuardPageRoutingModule } from './verified-by-guard-routing.module';

import { VerifiedByGuardPage } from './verified-by-guard.page';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { CountrySelectionBoxModule } from 'src/app/components/country-selection-box/country-selection-box.module';
import { EventsModule } from 'src/app/components/events/events.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiedByGuardPageRoutingModule,
    InputBoxModule,
    CountrySelectionBoxModule,
    // EventsModule
  ],
  declarations: [VerifiedByGuardPage]
})
export class VerifiedByGuardPageModule {}
