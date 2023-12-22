import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TutorialBoxModule } from './tutorial-box/tutorial-box.module';
import { ScanBoxModule } from './scan-box/scan-box.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    ScanBoxModule,
    TutorialBoxModule,
    SwiperModule
  ],
  declarations: [TutorialPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TutorialPageModule {}
