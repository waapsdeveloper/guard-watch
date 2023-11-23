import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallResidentPageRoutingModule } from './call-resident-routing.module';

import { CallResidentPage } from './call-resident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallResidentPageRoutingModule
  ],
  declarations: [CallResidentPage]
})
export class CallResidentPageModule {}
