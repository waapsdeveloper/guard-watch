import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';
import { FilterListPipeModule } from 'src/app/pipes/filter-list.pipe.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FilterListPipeModule
  ],
  exports: [
    EventsComponent
  ]
})
export class EventsModule { }
