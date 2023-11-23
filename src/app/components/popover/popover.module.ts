import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PopoverComponent } from './popover.component';



@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    PopoverComponent
  ]
})
export class PopoverModule { }

