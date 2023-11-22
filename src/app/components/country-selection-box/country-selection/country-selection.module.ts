import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionComponent } from './country-selection.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CountrySelectionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CountrySelectionComponent
  ]
})
export class CountrySelectionModule { }
