import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassEventComponent } from './pass-event.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PassEventComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[PassEventComponent]
})
export class PassEventModule { }
