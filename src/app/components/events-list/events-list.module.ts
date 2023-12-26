import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';
import { IonicModule } from '@ionic/angular';
import { EventsAddModule } from './events-add/events-add.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EventsListComponent],
  imports: [
    CommonModule,
    IonicModule,
    EventsAddModule,
    FormsModule

  ],
  exports: [EventsListComponent]
})
export class EventsListModule { }
