import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApprovedGuestPageRoutingModule } from './pre-approved-guest-routing.module';

import { PreApprovedGuestPage } from './pre-approved-guest.page';
import { ActionSheetModule } from 'src/app/components/action-sheet/action-sheet.module';
import { FilterListPipe } from 'src/app/pipes/filter-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreApprovedGuestPageRoutingModule,
    ActionSheetModule
  ],
  declarations: [PreApprovedGuestPage, FilterListPipe]
})
export class PreApprovedGuestPageModule {}
