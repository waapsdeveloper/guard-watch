import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesAddComponent } from './spaces-add.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from '../../input-box/input-box.module';



@NgModule({
  declarations: [SpacesAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    InputBoxModule,
  ],
  exports: [
    SpacesAddComponent
  ]
})
export class SpacesAddModule { }
