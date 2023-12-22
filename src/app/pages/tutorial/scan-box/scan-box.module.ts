import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanBoxComponent } from './scan-box.component';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  declarations: [ScanBoxComponent],
  imports: [
    CommonModule,
    QRCodeModule,
  ],
  exports: [ScanBoxComponent]
})
export class ScanBoxModule { }
