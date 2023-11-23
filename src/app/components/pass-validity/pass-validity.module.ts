import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassValidityComponent } from './pass-validity.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PassValidityComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports :[PassValidityComponent]
})
export class PassValidityModule { }
