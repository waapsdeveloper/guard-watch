import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { CountrySelectionBoxModule } from "../../components/country-selection-box/country-selection-box.module";

@NgModule({
    declarations: [SignupPage],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SignupPageRoutingModule,
        InputBoxModule,
        CountrySelectionBoxModule
    ]
})
export class SignupPageModule {}
