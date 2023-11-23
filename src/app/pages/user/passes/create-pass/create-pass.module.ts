import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePassPageRoutingModule } from './create-pass-routing.module';

import { CreatePassPage } from './create-pass.page';
import { PassDateModule } from 'src/app/components/pass-date/pass-date.module';
import { PassTypeModule } from 'src/app/components/pass-type/pass-type.module';
import { PassEventModule } from 'src/app/components/pass-event/pass-event.module';
import { VisitorTypeModule } from 'src/app/components/visitor-type/visitor-type.module';
import { PassValidityModule } from 'src/app/components/pass-validity/pass-validity.module';
import { EndDateModule } from 'src/app/components/end-date/end-date.module';
import { AddressModule } from 'src/app/components/address/address.module';
import { PassTimeModule } from 'src/app/components/pass-time/pass-time.module';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePassPageRoutingModule,
    PassDateModule,
    QRCodeModule,
    PassTypeModule,
    PassEventModule,
    VisitorTypeModule,
    PassValidityModule,
    EndDateModule,
    AddressModule,
    PassTimeModule
  ],
  declarations: [CreatePassPage]
})
export class CreatePassPageModule {}
