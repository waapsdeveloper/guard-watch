import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacesPageRoutingModule } from './spaces-routing.module';

import { SpacesPage } from './spaces.page';
import { AddSpacesModule } from './add-spaces/add-spaces.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacesPageRoutingModule,
    AddSpacesModule
  ],
  declarations: [SpacesPage]
})
export class SpacesPageModule {}
