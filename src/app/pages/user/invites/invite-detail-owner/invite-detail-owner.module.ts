import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteDetailOwnerPageRoutingModule } from './invite-detail-owner-routing.module';

import { InviteDetailOwnerPage } from './invite-detail-owner.page';
import { InviteListItemModule } from '../invite-list-item/invite-list-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteDetailOwnerPageRoutingModule,
    InviteListItemModule
  ],
  declarations: [InviteDetailOwnerPage]
})
export class InviteDetailOwnerPageModule {}
