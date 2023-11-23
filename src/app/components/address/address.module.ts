import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
  ,
  exports: [AddressComponent]
})
export class AddressModule { }
