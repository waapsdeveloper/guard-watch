import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSheetComponent } from './action-sheet.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ActionSheetComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ActionSheetComponent
  ]
})
export class ActionSheetModule { }
