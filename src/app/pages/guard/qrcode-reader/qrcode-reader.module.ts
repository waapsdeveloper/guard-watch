import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodeReaderPageRoutingModule } from './qrcode-reader-routing.module';

import { QrcodeReaderPage } from './qrcode-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeReaderPageRoutingModule
  ],
  declarations: [QrcodeReaderPage]
})
export class QrcodeReaderPageModule {}
