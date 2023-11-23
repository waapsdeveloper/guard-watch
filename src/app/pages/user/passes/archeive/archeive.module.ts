import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcheivePageRoutingModule } from './archeive-routing.module';

import { ArcheivePage } from './archeive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcheivePageRoutingModule
  ],
  declarations: [ArcheivePage]
})
export class ArcheivePageModule {}
