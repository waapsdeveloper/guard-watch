import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { FilterListPipeModule } from 'src/app/pipes/filter-list.pipe.module';

@NgModule({
    declarations: [EventsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EventsPageRoutingModule,
        FilterListPipeModule
    ]
})
export class EventsPageModule {}
