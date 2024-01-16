import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestInvitesPageRoutingModule } from './request-invites-routing.module';

import { RequestInvitesPage } from './request-invites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestInvitesPageRoutingModule
  ],
  declarations: [RequestInvitesPage]
})
export class RequestInvitesPageModule {}
