import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApprovedGuestPageRoutingModule } from './pre-approved-guest-routing.module';

import { PreApprovedGuestPage } from './pre-approved-guest.page';
import { ActionSheetModule } from 'src/app/components/action-sheet/action-sheet.module';
import { FilterListPipeModule } from 'src/app/pipes/filter-list.pipe.module';

@NgModule({
  declarations: [PreApprovedGuestPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreApprovedGuestPageRoutingModule,
    ActionSheetModule,
    FilterListPipeModule
  ]
})
export class PreApprovedGuestPageModule {}
