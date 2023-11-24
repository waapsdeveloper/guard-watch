import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionBoxComponent } from './country-selection-box.component';
import { CountrySelectionModule } from './country-selection/country-selection.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CountrySelectionBoxComponent],
  imports: [
    CommonModule,
    IonicModule,
    // CountrySelectionModule
  ],
  exports: [
    CountrySelectionBoxComponent
  ]
})
export class CountrySelectionBoxModule { }
