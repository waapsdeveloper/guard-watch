import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicSpaceComponent } from './public-space.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from '../input-box/input-box.module';



@NgModule({
  declarations: [PublicSpaceComponent],
  imports: [
    CommonModule,
    IonicModule,
    InputBoxModule,


  ],
  exports:[PublicSpaceComponent
  ]
})
export class PublicSpaceModule {
 }
