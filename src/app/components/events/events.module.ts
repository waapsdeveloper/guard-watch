import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';
import { FilterListPipe } from 'src/app/pipes/filter-list.pipe';



@NgModule({
  declarations: [EventsComponent, FilterListPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    EventsComponent
  ]
})
export class EventsModule { }
