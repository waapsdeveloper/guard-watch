import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InviteReceivedBarcodeComponent } from './invite-received-barcode.component';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  declarations: [InviteReceivedBarcodeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    QRCodeModule
  ],
  exports: [InviteReceivedBarcodeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InviteReceivedBarcodeModule { }
