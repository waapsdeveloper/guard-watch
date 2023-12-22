import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialBoxComponent } from './tutorial-box.component';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TutorialBoxComponent],
  imports: [
    CommonModule,

    IonicModule
  ],
  exports: [TutorialBoxComponent]
})
export class TutorialBoxModule { }
