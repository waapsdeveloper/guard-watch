import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactDetailListPageRoutingModule } from './contact-detail-list-routing.module';

import { ContactDetailListPage } from './contact-detail-list.page';
import { FilterListPipeModule } from 'src/app/pipes/filter-list.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactDetailListPageRoutingModule,
    FilterListPipeModule
  ],
  declarations: [ContactDetailListPage]
})
export class ContactDetailListPageModule {}
