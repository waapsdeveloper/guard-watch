import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsAddComponent } from './events-add.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from '../../input-box/input-box.module';



@NgModule({
  declarations: [EventsAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    InputBoxModule
  ],
  exports: [
    EventsAddComponent
  ]
})
export class EventsAddModule { }
