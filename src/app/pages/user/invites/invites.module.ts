import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitesPageRoutingModule } from './invites-routing.module';

import { InvitesPage } from './invites.page';
import { SpacesListModule } from 'src/app/components/spaces-list/spaces-list.module';
import { InviteListItemModule } from './invite-list-item/invite-list-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitesPageRoutingModule,
    SpacesListModule,
    InviteListItemModule
  ],
  declarations: [InvitesPage]
})
export class InvitesPageModule {}
