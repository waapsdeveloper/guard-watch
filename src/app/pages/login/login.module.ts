import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { CountrySelectionBoxModule } from 'src/app/components/country-selection-box/country-selection-box.module';
import { PhoneInputModule } from 'src/app/components/phone-input/phone-input.module';
import { LoginOptVerificationModule } from './login-opt-verification/login-opt-verification.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    InputBoxModule,
    CountrySelectionBoxModule,
    PhoneInputModule,
    LoginOptVerificationModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
