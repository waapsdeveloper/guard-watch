import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { AddContactsModule } from './add-contacts/add-contacts.module';
import { ContactDetailsPageRoutingModule } from './contact-details/contact-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    AddContactsModule
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
