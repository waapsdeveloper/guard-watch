import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PopoverComponent } from '../components/popover/popover.component';
import { PopoverModule } from '../components/popover/popover.module';
import { EventsModule } from '../components/events/events.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PopoverModule
  ]
})
export class PagesModule { }
