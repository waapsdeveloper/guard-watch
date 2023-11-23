import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassTypeComponent } from './pass-type.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PassTypeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[PassTypeComponent]
})
export class PassTypeModule { }
