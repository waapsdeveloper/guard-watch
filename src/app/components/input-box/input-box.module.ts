import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InputBoxComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InputBoxComponent
  ]
})
export class InputBoxModule { }
