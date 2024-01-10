import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteReceivedPageRoutingModule } from './invite-received-routing.module';

import { InviteReceivedPage } from './invite-received.page';
import { InviteReceivedBarcodeModule } from './invite-received-barcode/invite-received-barcode.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteReceivedPageRoutingModule,
    InviteReceivedBarcodeModule
  ],
  declarations: [InviteReceivedPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InviteReceivedPageModule {}
