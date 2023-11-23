import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorTypeComponent } from './visitor-type.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [VisitorTypeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[VisitorTypeComponent]
})
export class VisitorTypeModule { }
