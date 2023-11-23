import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassDetailPageRoutingModule } from './pass-detail-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { PassDetailPage } from './pass-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassDetailPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PassDetailPage]
})
export class PassDetailPageModule {}
