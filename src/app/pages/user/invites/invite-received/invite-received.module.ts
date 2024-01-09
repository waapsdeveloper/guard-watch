import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteReceivedPageRoutingModule } from './invite-received-routing.module';

import { InviteReceivedPage } from './invite-received.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteReceivedPageRoutingModule
  ],
  declarations: [InviteReceivedPage]
})
export class InviteReceivedPageModule {}
