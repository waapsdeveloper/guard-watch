import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteDetailPageRoutingModule } from './invite-detail-routing.module';

import { InviteDetailPage } from './invite-detail.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteDetailPageRoutingModule,
    QRCodeModule,

  ],
  declarations: [InviteDetailPage]
})
export class InviteDetailPageModule {}
