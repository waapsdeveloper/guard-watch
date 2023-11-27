import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionComponent } from './country-selection.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FilterListPipeModule } from 'src/app/pipes/filter-list.pipe.module';



@NgModule({
  declarations: [CountrySelectionComponent],
  imports: [
    CommonModule,
    IonicModule,
    FilterListPipeModule,
    FormsModule
  ],
  exports: [
    CountrySelectionComponent
  ]
})
export class CountrySelectionModule { }
