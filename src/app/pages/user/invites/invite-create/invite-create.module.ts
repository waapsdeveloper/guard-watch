import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteCreatePageRoutingModule } from './invite-create-routing.module';

import { InviteCreatePage } from './invite-create.page';
import { QRCodeModule } from 'angularx-qrcode';
import { EventsListModule } from 'src/app/components/events-list/events-list.module';
import { ContactsListModule } from 'src/app/components/contacts-list/contacts-list.module';
import { SpacesListModule } from 'src/app/components/spaces-list/spaces-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteCreatePageRoutingModule,
    QRCodeModule,
    EventsListModule,
    ContactsListModule,
    SpacesListModule
  ],
  declarations: [InviteCreatePage]
})
export class InviteCreatePageModule {}
