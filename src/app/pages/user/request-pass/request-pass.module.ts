import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPassPageRoutingModule } from './request-pass-routing.module';

import { RequestPassPage } from './request-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPassPageRoutingModule
  ],
  declarations: [RequestPassPage]
})
export class RequestPassPageModule {}
