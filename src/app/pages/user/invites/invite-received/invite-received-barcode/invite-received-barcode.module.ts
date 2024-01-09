import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InviteReceivedBarcodeComponent } from './invite-received-barcode.component';

@NgModule({
  declarations: [InviteReceivedBarcodeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [InviteReceivedBarcodeComponent]
})
export class InviteReceivedBarcodeModule { }
