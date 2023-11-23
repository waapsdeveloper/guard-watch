import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionComponent } from './country-selection.component';
import { IonicModule } from '@ionic/angular';
import { FilterListPipe } from 'src/app/pipes/filter-list.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CountrySelectionComponent, FilterListPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CountrySelectionComponent
  ]
})
export class CountrySelectionModule { }
