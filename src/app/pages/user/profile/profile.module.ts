import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { CountrySelectionBoxModule } from 'src/app/components/country-selection-box/country-selection-box.module';
import { PhoneInputModule } from 'src/app/components/phone-input/phone-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    InputBoxModule,
    CountrySelectionBoxModule,
    PhoneInputModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
