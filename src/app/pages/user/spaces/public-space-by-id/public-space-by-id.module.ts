import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicSpaceByIdPageRoutingModule } from './public-space-by-id-routing.module';

import { PublicSpaceByIdPage } from './public-space-by-id.page';
import { AddContactsModule } from '../../contacts/add-contacts/add-contacts.module';
import { PublicSpaceModule } from 'src/app/components/public-space/public-space.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicSpaceByIdPageRoutingModule,
    PublicSpaceModule
  ],
  declarations: [PublicSpaceByIdPage]
})

export class PublicSpaceByIdPageModule {}
